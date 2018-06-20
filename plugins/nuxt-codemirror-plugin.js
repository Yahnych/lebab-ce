import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';

import 'codemirror/mode/vue/vue.js';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/keymap/sublime.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldgutter.js';

Vue.use(VueCodemirror);
