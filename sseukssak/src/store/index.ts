import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface DirState {
  fromDir: string;
  fileList: string[];
  fileSortList: SortList;
  toLibraryList: ToLibrary[];
  toLibraryNameList: string[];
  selectedToName: string;
  logBackCheck: boolean;
  duplicatedList: any[][];
  dropToDir: string;
}
interface ToLibrary {
  name: string;
  directories: object[];
}
interface SortList {
  directories: Directory[];
  files: File[];
}
interface File {
  fileType: string;
  name: string;
  birthTime: number;
  updatedTime: number;
}
interface Directory {
  name: string;
  birthTime: number;
  updatedTime: number;
}

export default new Vuex.Store({
  state: {
    dropToDir: '',
    fromDir: '',
    fileList: [],
    fileSortList: {
      directories: [],
      files: []
    },
    toLibraryList: [],
    toLibraryNameList: [],
    selectedToName: '',
    logBackCheck: false,
    duplicatedList: [[]]
  },
  mutations: {
    changeDropToDir(state: DirState, dropToDir: string) {
      state.dropToDir = dropToDir;
    },
    changeDir(state: DirState, newDir: string) {
      state.fromDir = newDir;
    },
    changeFileList(state: DirState, newList: string[]) {
      state.fileList = newList;
    },
    changeFileSortList(state: DirState, newList: SortList) {
      state.fileSortList = newList;
    },
    changeToLibraryList(state: DirState, newList: ToLibrary[]) {
      state.toLibraryList = newList;
      state.toLibraryNameList = [];
      newList.forEach((from: ToLibrary) => {
        state.toLibraryNameList.push(from.name);
      });
    },
    changeSelectedToName(state: DirState, newName: string) {
      state.selectedToName = newName;
    },
    changeDuplicatedList(state: DirState, newList: any[][]) {
      state.duplicatedList = newList;
    },
    changeLogBackCheck(state: DirState, newCheck) {
      state.logBackCheck = newCheck;
    }
  },
  actions: {},
  modules: {}
});
