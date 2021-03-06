import pubchemAccess from 'pubchem-access'
import axios from 'axios'
import key from './key.json'

const pubchem = pubchemAccess.domain('compound');

// ЖЕСТОЧАЙШАЯ ДИЧЬ, УХАДИ ПАКА НЕ ПОЗДНА
export default {
  state: {
    structure: {},
    info: {}
  },
  mutations: {
    structure(state, structure) {
      state.structure = structure;
    },
    info(state, info) {
      state.info = info;
    }
  },
  actions: {
    async loadSubstance({commit, dispatch, rootState}, props) {
      commit('loading', true);

      try {
        let info = await dispatch('wikiData', props.label);
        if(!info) commit('setMessage', {log: 'Извините, вещество не найдено', toBack: true, type: 'error'});

        let type = null;
        if(info.extract) {
          let txt = info.extract.toLowerCase() + info.title.toLowerCase();
          if(txt.search(/спирт/) !== -1) type = 'alcohols';
          else if(txt.search(/оксид/) !== -1) type = 'oxides';
          else if(txt.search(/щелоч/) !== -1) type = 'caustics';
          else if(txt.search(/основан|основный/) !== -1) type = 'foundations';
          else if(txt.search(/cоль/) !== -1) type = 'salts';
          else if(txt.search(/кислот/) !== -1) type = 'acids';
        }
        let image = await dispatch('wikiImages', 'Файл:' + info.pageprops.page_image_free);
        let enReq = await dispatch('translateReq', {req: props.label, translate: 'ru-en'});
        let data;
        try {
          data = await dispatch('getPubchemData', enReq);
        } catch(e) {
          data = await dispatch('getPubchemData', props.formula);
        }

        let structure = await dispatch('getStructureData', data.CID);
        commit('info', {...info, type, image: image[0].thumburl, formula: data.MolecularFormula});
        commit('structure', structure);
      } catch(e) {
        console.log(e);
        commit('setMessage', {log: 'Извините, не удается загрузить вещество', toBack: true, type: 'error'});
      }

      commit('loading', false);
    },
    async wikiData({rootState}, req) {
      let wiki = 'https://' + rootState.lang + '.wikipedia.org/w/api.php?format=json&action=query&list=search&origin=*&srsearch=' + req;
      let response = await axios.get(wiki, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
      let search = response.data.query.search;
      let title = search[0].title;

      wiki = 'https://' + rootState.lang + '.wikipedia.org/w/api.php?format=json&action=query&prop=pageprops|extracts&exintro=&explaintext=&origin=*&titles=' + title;
      response = await axios.get(wiki, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
      let pages = response.data.query.pages;
      let data = pages[Object.keys(pages)[0]];
      data.title = title;
      if(data.extract.search(/химич|кристалл|дигидро|морфин|органич|соедин|формул|спирт|оксид|щелоч|основан|основный|cоль|кислот/) !== -1) return data;
    },
    async wikiImages({rootState}, req) {
      let wiki = 'https://' + rootState.lang + '.wikipedia.org/w/api.php?format=json&action=query&prop=imageinfo&&iiprop=url&iiurlwidth=1024&origin=*&titles=' + req;
      let response = await axios.get(wiki, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
      let pages = response.data.query.pages;
      let data = pages[Object.keys(pages)[0]];
      return data.imageinfo;
    },

  	async translateReq({commit}, props) {
  		let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
  			'key=' + key.yat +
  			'&text=' + encodeURIComponent(props.req) +
  			'&lang=' + props.translate;

    	let response = await axios.get(translate);
    	return response.data.text[0].replace('the ', '');
  	},

  	async getPubchemData(context, req) {
      let pubchem = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/' + encodeURIComponent(req) + '/property/IUPACName,MolecularFormula,MolecularWeight,/JSON';
      let response = await axios.get(pubchem);
      return response.data.PropertyTable.Properties[0];
  	},

  	async getStructureData(context, CID) {
  		let url3d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=3d&response_type=display`;
  		let url2d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=2d&response_type=display`;

      let response;
      try {
        response = await axios.get(url3d);
        response.data.typeStructure = '3d';
      } catch(e) {
        response = await axios.get(url2d);
        response.data.typeStructure = '2d';
      }
      return response.data;
    }
  }
}
