/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(152)
	__webpack_require__(160)
	__webpack_require__(153)
	var __weex_template__ = __webpack_require__(164)
	var __weex_style__ = __webpack_require__(165)
	var __weex_script__ = __webpack_require__(166)

	__weex_define__('@weex-component/2bb97ed0198ea3308e26ee13c0047c9c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/2bb97ed0198ea3308e26ee13c0047c9c',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(153)
	var __weex_template__ = __webpack_require__(157)
	var __weex_style__ = __webpack_require__(158)
	var __weex_script__ = __webpack_require__(159)

	__weex_define__('@weex-component/style-box', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(154)
	var __weex_style__ = __webpack_require__(155)
	var __weex_script__ = __webpack_require__(156)

	__weex_define__('@weex-component/style-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 154:
/***/ function(module, exports) {

	module.exports = {
	  "type": "text",
	  "classList": [
	    "item",
	    "txt"
	  ],
	  "attr": {
	    "value": function () {return this.value}
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor()}
	  }
	}

/***/ },

/***/ 155:
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "marginRight": 10,
	    "width": 160,
	    "height": 75,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "txt": {
	    "color": "#eeeeee"
	  }
	}

/***/ },

/***/ 156:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    value: '',
	    type: '0' }},
	  methods: {
	    bgColor: function bgColor() {
	      return this.type == '1' ? '#7BA3A8' : '#BEAD92';
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "Box Model",
	        "paddingBody": "0",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "box"
	          ],
	          "attr": {
	            "value": "Box"
	          }
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "border",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "border-width",
	            "type": ""
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 2,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 10,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderLeftWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderBottomWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "border-color",
	            "type": ""
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 4,
	                    "borderColor": "#dddddd"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 4,
	                    "borderColor": "#FF0000"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "border-style",
	            "type": ""
	          },
	          "children": [
	            {
	              "type": "wxc-tip",
	              "attr": {
	                "type": "warning",
	                "value": "just support four edges"
	              },
	              "style": {
	                "marginBottom": 10
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "solid",
	                    "borderWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "dashed",
	                    "borderWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": "",
	                    "type": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderStyle": "dotted",
	                    "borderWidth": 4,
	                    "borderColor": "#333333"
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "wxc-panel",
	          "attr": {
	            "title": "border-radius",
	            "type": ""
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "style-item",
	                  "style": {
	                    "width": 75,
	                    "borderRadius": 38
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderRadius": 20
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderTopLeftRadius": 20,
	                    "borderTopRightRadius": 20
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                },
	                {
	                  "type": "style-item",
	                  "style": {
	                    "borderBottomLeftRadius": 20,
	                    "borderBottomRightRadius": 20
	                  },
	                  "attr": {
	                    "value": ""
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 158:
/***/ function(module, exports) {

	module.exports = {
	  "box": {
	    "backgroundColor": "#f5f5f5",
	    "width": 260,
	    "height": 260,
	    "paddingLeft": 40,
	    "paddingTop": 40,
	    "paddingRight": 40,
	    "paddingBottom": 40,
	    "marginLeft": 40,
	    "marginTop": 40,
	    "marginRight": 40,
	    "marginBottom": 40,
	    "borderWidth": 40,
	    "borderColor": "#333333",
	    "borderStyle": "solid"
	  }
	}

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    size: 40
	  }}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(153)
	var __weex_template__ = __webpack_require__(161)
	var __weex_style__ = __webpack_require__(162)
	var __weex_script__ = __webpack_require__(163)

	__weex_define__('@weex-component/style-flex', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 161:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "flex-direction",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "row"
	              },
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "type": "1"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "flexDirection": "column"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "column"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "type": "1"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "justify-content",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "justifyContent": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "justifyContent": "flex-end"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "justifyContent": "space-between"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "align-items",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "row-align"
	          ],
	          "style": {
	            "alignItems": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "row-align"
	          ],
	          "style": {
	            "alignItems": "flex-end"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "row-align"
	          ],
	          "style": {
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row",
	            "row-align"
	          ],
	          "style": {
	            "alignItems": "stretch"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "flex",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "alignItems": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "value": "no flex"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "value": "no flex",
	                "type": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "value": "no flex"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "alignItems": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0
	              },
	              "attr": {
	                "value": "no flex"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 1
	              },
	              "attr": {
	                "type": "1",
	                "value": "flex:1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 2
	              },
	              "attr": {
	                "value": "flex:2"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "alignItems": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 1
	              },
	              "attr": {
	                "value": "flex:1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 1
	              },
	              "attr": {
	                "type": "1",
	                "value": "flex:1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 1
	              },
	              "attr": {
	                "value": "flex:1"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "alignItems": "flex-start"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 1
	              },
	              "attr": {
	                "value": "flex:1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 2
	              },
	              "attr": {
	                "type": "1",
	                "value": "flex:2"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "marginRight": 0,
	                "flex": 3
	              },
	              "attr": {
	                "value": "flex:3"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "flex-wrap",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "flexWrap": "wrap",
	            "backgroundColor": "#808080",
	            "padding": 10
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "1:wrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "2:wrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "3:wrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "4:wrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "5:wrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "6:wrap"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ],
	          "style": {
	            "flexWrap": "nowrap",
	            "backgroundColor": "#808080",
	            "padding": 10
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "1:nowrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "2:nowrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "3:nowrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "4:nowrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "5:nowrap"
	              }
	            },
	            {
	              "type": "style-item",
	              "attr": {
	                "value": "6:nowrap"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 162:
/***/ function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "row",
	    "marginBottom": 10
	  },
	  "row-align": {
	    "height": 160,
	    "borderWidth": 3,
	    "borderColor": "#dddddd",
	    "borderStyle": "solid"
	  }
	}

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);}
	/* generated by weex-loader */


/***/ },

/***/ 164:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "style-box"
	    },
	    {
	      "type": "style-flex"
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "opacity",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "style-item",
	              "style": {
	                "opacity": 1
	              },
	              "attr": {
	                "value": "1"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "opacity": 0.9
	              },
	              "attr": {
	                "value": "0.9"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "opacity": 0.5
	              },
	              "attr": {
	                "value": "0.5"
	              }
	            },
	            {
	              "type": "style-item",
	              "style": {
	                "opacity": 0.2
	              },
	              "attr": {
	                "value": "0.2"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "wxc-panel",
	      "attr": {
	        "title": "background-color",
	        "type": "primary"
	      },
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "style-item",
	              "classList": [
	                "bg-item"
	              ],
	              "style": {
	                "backgroundColor": "#333333"
	              },
	              "attr": {
	                "value": "#333"
	              }
	            },
	            {
	              "type": "style-item",
	              "classList": [
	                "bg-item"
	              ],
	              "style": {
	                "backgroundColor": "#333333"
	              },
	              "attr": {
	                "value": "#333333"
	              }
	            },
	            {
	              "type": "style-item",
	              "classList": [
	                "bg-item"
	              ],
	              "style": {
	                "backgroundColor": "rgb(238,162,54)"
	              },
	              "attr": {
	                "value": "rgb()"
	              }
	            },
	            {
	              "type": "style-item",
	              "classList": [
	                "bg-item"
	              ],
	              "style": {
	                "backgroundColor": "rgba(238,162,54,0.5)"
	              },
	              "attr": {
	                "value": "rgba()"
	              }
	            },
	            {
	              "type": "style-item",
	              "classList": [
	                "bg-item"
	              ],
	              "style": {
	                "backgroundColor": "#FF0000"
	              },
	              "attr": {
	                "value": "red"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = {
	  "bg-item": {
	    "width": 690,
	    "marginBottom": 10
	  }
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	module.exports = {
	  data: function () {return {}}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });