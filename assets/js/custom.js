//document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	//OverlayScrollbars(document.querySelectorAll("body"), { });
//});
//For some yummy particles

//tsparticles
// const tsParticles = require("tsparticles");
// tsParticles.load("tsparticles",
// {
// 	"autoPlay": true,
// 	"background": {
// 	  "color": {
// 		"value": "#000"
// 	  },
// 	  "image": "",
// 	  "position": "",
// 	  "repeat": "",
// 	  "size": "",
// 	  "opacity": 1
// 	},
// 	"backgroundMask": {
// 	  "composite": "destination-out",
// 	  "cover": {
// 		"color": {
// 		  "value": "#fff"
// 		},
// 		"opacity": 1
// 	  },
// 	  "enable": false
// 	},
// 	"fullScreen": {
// 	  "enable": true,
// 	  "zIndex": 0
// 	},
// 	"detectRetina": true,
// 	"duration": 0,
// 	"fpsLimit": 60,
// 	"interactivity": {
// 	  "detectsOn": "window",
// 	  "events": {
// 		"onClick": {
// 		  "enable": false,
// 		  "mode": []
// 		},
// 		"onDiv": {
// 		  "selectors": [],
// 		  "enable": false,
// 		  "mode": [],
// 		  "type": "circle"
// 		},
// 		"onHover": {
// 		  "enable": false,
// 		  "mode": [],
// 		  "parallax": {
// 			"enable": false,
// 			"force": 2,
// 			"smooth": 10
// 		  }
// 		},
// 		"resize": true
// 	  },
// 	  "modes": {
// 		"attract": {
// 		  "distance": 200,
// 		  "duration": 0.4,
// 		  "easing": "ease-out-quad",
// 		  "factor": 1,
// 		  "maxSpeed": 50,
// 		  "speed": 1
// 		},
// 		"bounce": {
// 		  "distance": 200
// 		},
// 		"bubble": {
// 		  "distance": 200,
// 		  "duration": 0.4,
// 		  "mix": false
// 		},
// 		"connect": {
// 		  "distance": 80,
// 		  "links": {
// 			"opacity": 0.5
// 		  },
// 		  "radius": 60
// 		},
// 		"grab": {
// 		  "distance": 100,
// 		  "links": {
// 			"blink": false,
// 			"consent": false,
// 			"opacity": 1
// 		  }
// 		},
// 		"light": {
// 		  "area": {
// 			"gradient": {
// 			  "start": {
// 				"value": "#ffffff"
// 			  },
// 			  "stop": {
// 				"value": "#000000"
// 			  }
// 			},
// 			"radius": 1000
// 		  },
// 		  "shadow": {
// 			"color": {
// 			  "value": "#000000"
// 			},
// 			"length": 2000
// 		  }
// 		},
// 		"push": {
// 		  "default": true,
// 		  "groups": [],
// 		  "quantity": 4
// 		},
// 		"remove": {
// 		  "quantity": 2
// 		},
// 		"repulse": {
// 		  "distance": 200,
// 		  "duration": 0.4,
// 		  "factor": 100,
// 		  "speed": 1,
// 		  "maxSpeed": 50,
// 		  "easing": "ease-out-quad"
// 		},
// 		"slow": {
// 		  "factor": 3,
// 		  "radius": 200
// 		},
// 		"trail": {
// 		  "delay": 1,
// 		  "pauseOnStop": false,
// 		  "quantity": 1,
// 		  "particles": {
// 			"color": {
// 			  "value": "#ff0000",
// 			  "animation": {
// 				"enable": true,
// 				"speed": 400,
// 				"sync": true
// 			  }
// 			},
// 			"collisions": {
// 			  "enable": false
// 			},
// 			"links": {
// 			  "enable": false
// 			},
// 			"move": {
// 			  "outModes": {
// 				"default": "destroy"
// 			  },
// 			  "speed": 2
// 			},
// 			"size": {
// 			  "value": 5,
// 			  "animation": {
// 				"enable": true,
// 				"speed": 5,
// 				"minimumValue": 1,
// 				"sync": true,
// 				"startValue": "min",
// 				"destroy": "max"
// 			  }
// 			}
// 		  }
// 		}
// 	  }
// 	},
// 	"manualParticles": [],
// 	"motion": {
// 	  "disable": false,
// 	  "reduce": {
// 		"factor": 4,
// 		"value": true
// 	  }
// 	},
// 	"particles": {
// 	  "bounce": {
// 		"horizontal": {
// 		  "random": {
// 			"enable": false,
// 			"minimumValue": 0.1
// 		  },
// 		  "value": 1
// 		},
// 		"vertical": {
// 		  "random": {
// 			"enable": false,
// 			"minimumValue": 0.1
// 		  },
// 		  "value": 1
// 		}
// 	  },
// 	  "collisions": {
// 		"bounce": {
// 		  "horizontal": {
// 			"random": {
// 			  "enable": false,
// 			  "minimumValue": 0.1
// 			},
// 			"value": 1
// 		  },
// 		  "vertical": {
// 			"random": {
// 			  "enable": false,
// 			  "minimumValue": 0.1
// 			},
// 			"value": 1
// 		  }
// 		},
// 		"enable": false,
// 		"mode": "bounce",
// 		"overlap": {
// 		  "enable": true,
// 		  "retries": 0
// 		}
// 	  },
// 	  "color": {
// 		"value": "#FF0000",
// 		"animation": {
// 		  "h": {
// 			"count": 0,
// 			"enable": true,
// 			"offset": 0,
// 			"speed": 10,
// 			"sync": true
// 		  },
// 		  "s": {
// 			"count": 0,
// 			"enable": false,
// 			"offset": 0,
// 			"speed": 1,
// 			"sync": true
// 		  },
// 		  "l": {
// 			"count": 0,
// 			"enable": false,
// 			"offset": 0,
// 			"speed": 1,
// 			"sync": true
// 		  }
// 		}
// 	  },
// 	  "destroy": {
// 		"mode": "none",
// 		"split": {
// 		  "count": 1,
// 		  "factor": {
// 			"random": {
// 			  "enable": false,
// 			  "minimumValue": 0
// 			},
// 			"value": 3
// 		  },
// 		  "rate": {
// 			"random": {
// 			  "enable": false,
// 			  "minimumValue": 0
// 			},
// 			"value": {
// 			  "min": 4,
// 			  "max": 9
// 			}
// 		  },
// 		  "sizeOffset": true
// 		}
// 	  },
// 	  "gradient": [],
// 	  "groups": {},
// 	  "life": {
// 		"count": 0,
// 		"delay": {
// 		  "random": {
// 			"enable": false,
// 			"minimumValue": 0
// 		  },
// 		  "value": 0,
// 		  "sync": false
// 		},
// 		"duration": {
// 		  "random": {
// 			"enable": false,
// 			"minimumValue": 0.0001
// 		  },
// 		  "value": 0,
// 		  "sync": false
// 		}
// 	  },
// 	  "links": {
// 		"blink": false,
// 		"color": {
// 		  "value": "#fff"
// 		},
// 		"consent": false,
// 		"distance": 100,
// 		"enable": false,
// 		"frequency": 1,
// 		"opacity": 1,
// 		"shadow": {
// 		  "blur": 5,
// 		  "color": {
// 			"value": "#00ff00"
// 		  },
// 		  "enable": false
// 		},
// 		"triangles": {
// 		  "enable": false,
// 		  "frequency": 1
// 		},
// 		"width": 1,
// 		"warp": false
// 	  },
// 	  "move": {
// 		"angle": {
// 		  "offset": 0,
// 		  "value": 90
// 		},
// 		"attract": {
// 		  "distance": 200,
// 		  "enable": true,
// 		  "rotate": {
// 			"x": 2000,
// 			"y": 2000
// 		  }
// 		},
// 		"decay": 0,
// 		"distance": {},
// 		"direction": "none",
// 		"drift": 0,
// 		"enable": true,
// 		"gravity": {
// 		  "acceleration": 9.81,
// 		  "enable": false,
// 		  "inverse": false,
// 		  "maxSpeed": 50
// 		},
// 		"path": {
// 		  "clamp": false,
// 		  "delay": {
// 			"random": {
// 			  "enable": false,
// 			  "minimumValue": 0
// 			},
// 			"value": 0
// 		  },
// 		  "enable": true,
// 		  "options": {
// 			"sides": 6,
// 			"turnSteps": 30,
// 			"angle": 30
// 		  },
// 		  "generator": "polygonPathGenerator"
// 		},
// 		"outModes": {
// 		  "default": "destroy",
// 		  "bottom": "destroy",
// 		  "left": "destroy",
// 		  "right": "destroy",
// 		  "top": "destroy"
// 		},
// 		"random": false,
// 		"size": false,
// 		"speed": 3,
// 		"spin": {
// 		  "acceleration": 0,
// 		  "enable": false
// 		},
// 		"straight": false,
// 		"trail": {
// 		  "enable": true,
// 		  "length": 20,
// 		  "fillColor": {
// 			"value": "#000"
// 		  }
// 		},
// 		"vibrate": false,
// 		"warp": false
// 	  },
// 	  "number": {
// 		"density": {
// 		  "enable": true,
// 		  "area": 800,
// 		  "factor": 1000
// 		},
// 		"limit": 0,
// 		"value": 0
// 	  },
// 	  "opacity": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 0.1
// 		},
// 		"value": 1,
// 		"animation": {
// 		  "count": 0,
// 		  "enable": false,
// 		  "speed": 2,
// 		  "sync": false,
// 		  "destroy": "none",
// 		  "startValue": "random"
// 		}
// 	  },
// 	  "orbit": {
// 		"animation": {
// 		  "count": 0,
// 		  "enable": false,
// 		  "speed": 1,
// 		  "sync": false
// 		},
// 		"enable": false,
// 		"opacity": 1,
// 		"rotation": {
// 		  "random": {
// 			"enable": false,
// 			"minimumValue": 0
// 		  },
// 		  "value": 45
// 		},
// 		"width": 1
// 	  },
// 	  "reduceDuplicates": false,
// 	  "repulse": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 0
// 		},
// 		"value": 0,
// 		"enabled": false,
// 		"distance": 1,
// 		"duration": 1,
// 		"factor": 1,
// 		"speed": 1
// 	  },
// 	  "roll": {
// 		"darken": {
// 		  "enable": false,
// 		  "value": 0
// 		},
// 		"enable": false,
// 		"enlighten": {
// 		  "enable": false,
// 		  "value": 0
// 		},
// 		"mode": "vertical",
// 		"speed": 25
// 	  },
// 	  "rotate": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 0
// 		},
// 		"value": 0,
// 		"animation": {
// 		  "enable": false,
// 		  "speed": 0,
// 		  "sync": false
// 		},
// 		"direction": "clockwise",
// 		"path": false
// 	  },
// 	  "shadow": {
// 		"blur": 0,
// 		"color": {
// 		  "value": "#000000"
// 		},
// 		"enable": false,
// 		"offset": {
// 		  "x": 0,
// 		  "y": 0
// 		}
// 	  },
// 	  "shape": {
// 		"options": {},
// 		"type": "circle"
// 	  },
// 	  "size": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 1
// 		},
// 		"value": 2,
// 		"animation": {
// 		  "count": 0,
// 		  "enable": false,
// 		  "speed": 5,
// 		  "sync": false,
// 		  "destroy": "none",
// 		  "startValue": "random"
// 		}
// 	  },
// 	  "stroke": {
// 		"width": 0
// 	  },
// 	  "tilt": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 0
// 		},
// 		"value": 0,
// 		"animation": {
// 		  "enable": false,
// 		  "speed": 0,
// 		  "sync": false
// 		},
// 		"direction": "clockwise",
// 		"enable": false
// 	  },
// 	  "twinkle": {
// 		"lines": {
// 		  "enable": false,
// 		  "frequency": 0.05,
// 		  "opacity": 1
// 		},
// 		"particles": {
// 		  "enable": false,
// 		  "frequency": 0.05,
// 		  "opacity": 1
// 		}
// 	  },
// 	  "wobble": {
// 		"distance": 5,
// 		"enable": false,
// 		"speed": 50
// 	  },
// 	  "zIndex": {
// 		"random": {
// 		  "enable": false,
// 		  "minimumValue": 0
// 		},
// 		"value": 0,
// 		"opacityRate": 1,
// 		"sizeRate": 1,
// 		"velocityRate": 1
// 	  }
// 	},
// 	"pauseOnBlur": true,
// 	"pauseOnOutsideViewport": true,
// 	"responsive": [],
// 	"themes": [],
// 	"zLayers": 100,
// 	"emitters": {
// 	  "autoPlay": true,
// 	  "fill": true,
// 	  "life": {
// 		"wait": false
// 	  },
// 	  "rate": {
// 		"quantity": 1,
// 		"delay": 0.25
// 	  },
// 	  "shape": "square",
// 	  "startCount": 0,
// 	  "size": {
// 		"mode": "percent",
// 		"height": 0,
// 		"width": 0
// 	  },
// 	  "direction": "none",
// 	  "position": {
// 		"x": 50,
// 		"y": 50
// 	  }
// 	}
//   });
