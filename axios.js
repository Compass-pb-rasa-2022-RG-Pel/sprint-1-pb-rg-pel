/* axios v0.9.1 | (c) 2016 por Matt Zabriskie */
(função webpackUniversalModuleDefinition(raiz, fábrica) {
	if(typeof export === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], fábrica);
	else if(typeof export === 'object')
		export["axios"] = factory();
	senão
		root["axios"] = fábrica();
})(isto, função() {
return /******/ (function(modules) { // webpackBootstrap
/*******/ // O cache do módulo
/******/ var instaladoModules = {};
/*******/
/*******/ // A função exigir
/******/ function __webpack_require__(moduleId) {
/*******/
/*******/ // Verifica se o módulo está no cache
/******/ if(installedModules[moduleId])
/******/ return installedModules[moduleId].exports;
/*******/
/*******/ // Cria um novo módulo (e coloca no cache)
/******/ var módulo = instaladoModules[moduleId] = {
/*******/ exporta: {},
/******/ id: moduleId,
/*******/ carregado: falso
/*****/ };
/*******/
/*******/ // Executa a função do módulo
/******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/*******/
/*******/ // Sinaliza o módulo como carregado
/*******/ module.loaded = true;
/*******/
/*******/ // Retorna as exportações do módulo
/*****/ return module.exports;
/********/ }
/*******/
/*******/
/*******/ // expõe o objeto módulos (__webpack_modules__)
/******/ __webpack_require__.m = módulos;
/*******/
/*******/ // expõe o cache do módulo
/******/ __webpack_require__.c = installModules;
/*******/
/*******/ // __webpack_public_path__
/******/ __webpack_require__.p = "";
/*******/
/*******/ // Carrega o módulo de entrada e retorna as exportações
/*******/ return __webpack_require__(0);
/*******/ })
/**************************************************** ************************/
/*******/ ([
/*0*/
/***/ function(módulo, exportações, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/},
/* 1 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var defaults = __webpack_require__(2);
	var utils = __webpack_require__(3);
	var dispatchRequest = __webpack_require__(4);
	var InterceptorManager = __webpack_require__(12);
	var isAbsoluteURL = __webpack_require__(13);
	var combineURLs = __webpack_require__(14);
	var bind = __webpack_require__(15);
	var transformData = __webpack_require__(8);
	
	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    pedido: new InterceptorManager(),
	    resposta: new InterceptorManager()
	  };
	}
	
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Permitir axios('example/url'[, config]) a la fetch API
	  if (tipo de configuração === 'string') {
	    config = utils.merge({
	      url: argumentos[0]
	    }, argumentos[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Suporta configuração de URL base
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Não permite a substituição de defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;
	
	  // Transforma os dados da solicitação
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Achata os cabeçalhos
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(método) {
	      delete config.headers[método];
	    }
	  );
	
	  // Conecta o middleware dos interceptores
	  var chain = [dispatchRequest, indefinido];
	  var promessa = Promise.resolve(config);
	
	  this.interceptors.request.forEach(função unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(função pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (comprimento da cadeia) {
	    promessa = promessa.then(chain.shift(), chain.shift());
	  }
	
	  promessa de retorno;
	};
	
	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	
	axios.create = function create(defaultConfig) {
	  return novo Axios(defaultConfig);
	};
	
	//Expõe os padrões
	axios.defaults = defaultInstance.defaults;
	
	// Expor tudo/spread
	axios.all = function all(promises) {
	  return Promise.all(promessas);
	};
	axios.spread = __webpack_require__(16);
	
	// Expor interceptores
	axios.interceptors = defaultInstance.interceptors;
	
	// Fornece aliases para métodos de solicitação suportados
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*nomes-função eslint:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      método: método,
	      URL: URL
	    }));
	  };
	  axios[método] = bind(Axios.prototype[método], defaultInstance);
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*nomes-função eslint:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      método: método,
	      URL: URL,
	      dados: dados
	    }));
	  };
	  axios[método] = bind(Axios.prototype[método], defaultInstance);
	});


/***/},
/* 2 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	modulo.exports = {
	  transformRequest: [função transformResponseJSON(dados, cabeçalhos) {
	    if (utils.isFormData(data)) {
	      dados de retorno;
	    }
	    if (utils.isArrayBuffer(data)) {
	      dados de retorno;
	    }
	    if (utils.isArrayBufferView(data)) {
	      retornar data.buffer;
	    }
	    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
	      // Define application/json se nenhum Content-Type foi especificado
	      if (!utils.isUndefined(headers)) {
	        utils.forEach(headers, function processContentTypeHeader(val, key) {
	          if (key.toLowerCase() === 'tipo de conteúdo') {
	            headers['Content-Type'] = val;
	          }
	        });
	
	        if (utils.isUndefined(headers['Content-Type'])) {
	          headers['Content-Type'] = 'application/json;charset=utf-8';
	        }
	      }
	      return JSON.stringify(dados);
	    }
	    dados de retorno;
	  }],
	
	  transformResponse: [função transformResponseJSON(dados) {
	    /*eslint no-param-reassign:0*/
	    if (tipo de dados === 'string') {
	      dados = dados.substituir(PROTEÇÃO_PREFIX, '');
	      experimentar {
	        dados = JSON.parse(dados);
	      } catch (e) { /* Ignorar */ }
	    }
	    dados de retorno;
	  }],
	
	  cabeçalhos: {
	    comum: {
	      'Aceitar': 'aplicativo/json, texto/simples, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    coloque: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  tempo limite: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN'
	};


/***/},
/* 3 */
/***/ function(módulo, exporta) {

	'usar estrito';
	
	/*global toString:true*/
	
	// utils é uma biblioteca de funções auxiliares genéricas não específicas para axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determinar se um valor é um Array
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} True se o valor for um Array, caso contrário, false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determinar se um valor é um ArrayBuffer
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} True se o valor for um ArrayBuffer, caso contrário, false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determinar se um valor é um FormData
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} True se o valor for um FormData, caso contrário, false
	 */
	function isFormData(val) {
	  return toString.call(val) === '[objeto FormData]';
	}
	
	/**
	 * Determinar se um valor é uma visão em um ArrayBuffer
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} True se o valor for uma visualização em um ArrayBuffer, caso contrário, false
	 */
	function isArrayBufferView(val) {
	  var resultado;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    resultado = ArrayBuffer.isView(val);
	  } senão {
	    resultado = (val) && (val.buffer) && (val.buffer instância de ArrayBuffer);
	  }
	  retorno resultado;
	}
	
	/**
	 * Determinar se um valor é uma String
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} True se o valor for uma String, caso contrário, false
	 */
	função isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determinar se um valor é um número
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for um Número, caso contrário, falso
	 */
	função éNúmero(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determinar se um valor é indefinido
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for indefinido, caso contrário, falso
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determinar se um valor é um objeto
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for um Objeto, caso contrário, falso
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'objeto';
	}
	
	/**
	 * Determinar se um valor é uma Data
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for uma Data, caso contrário, falso
	 */
	função éData(val) {
	  return toString.call(val) === '[data do objeto]';
	}
	
	/**
	 * Determinar se um valor é um arquivo
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for um Arquivo, caso contrário, falso
	 */
	function isFile(val) {
	  return toString.call(val) === '[arquivo de objeto]';
	}
	
	/**
	 * Determinar se um valor é um Blob
	 *
	 * @param {Object} val O valor a ser testado
	 * @returns {boolean} Verdadeiro se o valor for um Blob, caso contrário, falso
	 */
	function isBlob(val) {
	  return toString.call(val) === '[objeto Blob]';
	}
	
	/**
	 * Apare o excesso de espaço em branco no início e no final de uma string
	 *
	 * @param {String} str A String a ser cortada
	 * @returns {String} A String liberada do excesso de espaço em branco
	 */
	função trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine se estamos executando em um ambiente de navegador padrão
	 *
	 * Isso permite que o axios seja executado em um web worker e react-native.
	 * Ambos os ambientes suportam XMLHttpRequest, mas não globais totalmente padrão.
	 *
	 * trabalhadores da web:
	 * tipo de janela -> indefinido
	 * tipo de documento -> indefinido
	 *
	 * reagir-nativo:
	 * typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  Retorna (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'função'
	  );
	}
	
	/**
	 * Iterar sobre um Array ou um Object invocando uma função para cada item.
	 *
	 * Se `obj` for um callback Array será chamado passando
	 * o valor, índice e matriz completa para cada item.
	 *
	 * Se 'obj' for um retorno de chamada de objeto será chamado de passagem
	 * o valor, a chave e o objeto completo para cada propriedade.
	 *
	 * @param {Object|Array} obj O objeto a ser iterado
	 * @param {Function} fn O retorno de chamada a ser invocado para cada item
	 */
	function forEach(obj, fn) {
	  // Não se preocupe se nenhum valor for fornecido
	  if (obj === null || typeof obj === 'undefined') {
	    Retorna;
	  }
	
	  // Força um array se ainda não for algo iterável
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterar sobre os valores do array
	    for (var i = 0, l = obj.comprimento; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } senão {
	    // Iterar sobre chaves de objetos
	    for (chave var em obj) {
	      if (obj.hasOwnProperty(chave)) {
	        fn.call(null, obj[chave], chave, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Aceita varargs esperando que cada argumento seja um objeto, então
	 * mescla imutavelmente as propriedades de cada objeto e retorna o resultado.
	 *
	 * Quando vários objetos contêm a mesma chave, o objeto posterior em
	 * a lista de argumentos terá precedência.
	 *
	 * Exemplo:
	 *
	 * ``` js
	 * var resultado = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // gera 456
	 * ```
	 *
	 * @param {Object} obj1 Objeto a ser mesclado
	 * @returns {Object} Resultado de todas as propriedades de mesclagem
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var resultado = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      resultado[chave] = merge(resultado[chave], val);
	    } senão {
	      resultado[chave] = val;
	    }
	  }
	
	  for (var i = 0, l = argumentos.comprimento; i < l; i++) {
	    forEach(argumentos[i], assignValue);
	  }
	  retorno resultado;
	}
	
	modulo.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumero: isNumero,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  mesclar: mesclar,
	  guarnição: guarnição
	};


/***/},
/* 4 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	/**
	 * Despachar uma solicitação para o servidor usando qualquer adaptador
	 * é suportado pelo ambiente atual.
	 *
	 * @param {object} config A configuração que deve ser usada para a solicitação
	 * @returns {Promise} A promessa a ser cumprida
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(função executor(resolver, rejeitar) {
	    experimentar {
	      adaptador var;
	
	      if (typeof config.adapter === 'function') {
	        // Para suporte de adaptador personalizado
	        adaptador = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // Para navegadores, use o adaptador XHR
	        adaptador = __webpack_require__(5);
	      } else if (typeof process !== 'undefined') {
	        // Para nó, use adaptador HTTP
	        adaptador = __webpack_require__(5);
	      }
	
	      if (tipo de adaptador === 'função') {
	        adaptador(resolver, rejeitar, config);
	      }
	    } pegar (e) {
	      rejeitar(e);
	    }
	  });
	};
	


/***/},
/* 5 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	var buildURL = __webpack_require__(6);
	var parseHeaders = __webpack_require__(7);
	var transformData = __webpack_require__(8);
	var isURLSameOrigin = __webpack_require__(9);
	var btoa = janela.btoa || __webpack_require__(10);
	
	module.exports = function xhrAdapter(resolver, rejeitar, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;
	
	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Deixa o navegador definir
	  }
	
	  var pedido = new XMLHttpRequest();
	
	  // Para suporte ao IE 8/9 CORS
	  // Suporta apenas chamadas POST e GET e não retorna os cabeçalhos de resposta.
	  if (window.XDomainRequest && !('withCredentials' na solicitação) && !isURLSameOrigin(config.url)) {
	    pedido = nova janela.XDomainRequest();
	  }
	
	  // Autenticação básica HTTP
	  if (config.auth) {
	    var nome de usuário = config.auth.username || '';
	    var senha = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }
	
	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	  // Define o tempo limite da solicitação no MS
	  request.timeout = config.timeout;
	
	  // Escuta o estado pronto
	  request.onload = function handleLoad() {
	    if (!solicitação) {
	      Retorna;
	    }
	    // Prepara a resposta
	    var responseHeaders = 'getAllResponseHeaders' na solicitação? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
	    var resposta = {
	      dados: transformData(
	        respostaDados,
	        cabeçalhos de resposta,
	        config.transformResponse
	      ),
	      // IE envia 1223 em vez de 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'Sem conteúdo' : request.statusText,
	      cabeçalhos: responseHeaders,
	      configuração: configuração
	    };
	
	    // Resolve ou rejeita a Promessa com base no status
	    ((resposta.status >= 200 && resposta.status < 300) ||
	     (!('status' na solicitação) && response.responseText) ?
	      resolver:
	      rejeitar)(resposta);
	
	    // Pedido de limpeza
	    pedido = null;
	  };
	
	  // Lida com erros de rede de baixo nível
	  request.onerror = function handleError() {
	    // Erros reais são escondidos de nós pelo navegador
	    // onerror só deve disparar se for um erro de rede
	    rejeitar(new Error('Erro de rede'));
	
	    // Pedido de limpeza
	    pedido = null;
	  };
	
	  // Adiciona o cabeçalho xsrf
	  // Isso só é feito se estiver executando em um ambiente de navegador padrão.
	  // Especificamente não se estivermos em um web worker ou react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(11);
	
	    // Adiciona o cabeçalho xsrf
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	        cookies.read(config.xsrfCookieName):
	        Indefinido;
	
	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }
	
	  // Adiciona cabeçalhos à requisição
	  if ('setRequestHeader' na solicitação) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type se os dados não estiverem definidos
	        delete requestHeaders[chave];
	      } senão {
	        // Caso contrário, adiciona cabeçalho à solicitação
	        request.setRequestHeader(chave, val);
	      }
	    });
	  }
	
	  // Adicione withCredentials à solicitação, se necessário
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }
	
	  // Adicione responseType à solicitação, se necessário
	  if (config.responseType) {
	    experimentar {
	      request.responseType = config.responseType;
	    } pegar (e) {
	      if (request.responseType !== 'json') {
	        jogue e;
	      }
	    }
	  }
	
	  if (utils.isArrayBuffer(requestData)) {
	    requestData = new DataView(requestData);
	  }
	
	  //Envia o pedido
	  request.send(requestData);
	};


/***/},
/* 6 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	função codificar(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Crie um URL anexando parâmetros ao final
	 *
	 * @param {string} url A base do URL (por exemplo, http://www.google.com)
	 * @param {object} [params] Os parâmetros a serem anexados
	 * @returns {string} A url formatada
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    URL de retorno;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } senão {
	    var partes = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        Retorna;
	      }
	
	      if (utils.isArray(val)) {
	        chave = chave + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        vale = [val];
	      }
	
	      utils.forEach(val, função parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(chave) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  URL de retorno;
	};
	


/***/},
/* 7 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	/**
	 * Analisar cabeçalhos em um objeto
	 *
	 * ```
	 * Data: qua, 27 de agosto de 2014 08:58:49 GMT
	 * Tipo de conteúdo: application/json
	 * Conexão: manter-se vivo
	 * Codificação de transferência: em partes
	 * ```
	 *
	 * @param cabeçalhos {String} Cabeçalhos que precisam ser analisados
	 * @returns {Object} Cabeçalhos analisados ​​em um objeto
	 */
	module.exports = function parseHeaders(headers) {
	  var analisado = {};
	  chave var;
	  var val;
	  var i;
	
	  if (!headers) { return analisado; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    chave = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(linha.substr(i + 1));
	
	    if (chave) {
	      analisado[chave] = analisado[chave] ? analisado[chave] + ', ' + val : val;
	    }
	  });
	
	  retorno analisado;
	};


/***/},
/* 8 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	/**
	 * Transforme os dados para uma solicitação ou resposta
	 *
	 * @param {Object|String} data Os dados a serem transformados
	 * @param {Array} headers Os cabeçalhos da solicitação ou resposta
	 * @param {Array|Function} fns Uma única função ou Array de funções
	 * @returns {*} Os dados transformados resultantes
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    dados = fn(dados, cabeçalhos);
	  });
	
	  dados de retorno;
	};


/***/},
/* 9 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	modulo.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Envs de navegador padrão têm suporte total das APIs necessárias para testar
	  // se o URL de solicitação é da mesma origem que o local atual.
	  (função padrãoBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Analise um URL para descobrir seus componentes
	    *
	    * @param {String} url A URL a ser analisada
	    * @returns {Objeto}
	    */
	    função resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE precisa de atributo definido duas vezes para normalizar as propriedades
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode fornece a interface UrlUtils - http://url.spec.whatwg.org/#urlutils
	      Retorna {
	        href: urlParsingNode.href,
	        protocolo: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        pesquisa: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        nome do host: urlParsingNode.hostname,
	        porta: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine se um URL compartilha a mesma origem que o local atual
	    *
	    * @param {String} requestURL A URL a ser testada
	    * @returns {boolean} Verdadeiro se o URL compartilhar a mesma origem, caso contrário, falso
	    */
	    função de retorno éURLSameOrigin(requestURL) {
	      var analisado = (utils.isString(requestURL)) ? resolveURL(requestURL): requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            analisado.host === originURL.host);
	    };
	  })() :
	
	  // Envs de navegador não padrão (trabalhadores da web, react-native) carecem de suporte necessário.
	  (função nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      retorne verdadeiro;
	    };
	  })()
	);


/***/},
/*10*/
/***/ function(módulo, exporta) {

	'usar estrito';
	
	// polyfill btoa para IE<10 cortesia https://github.com/davidchambers/Base64.js
	
	var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function InvalidCharacterError(mensagem) {
	  this.message = mensagem;
	}
	InvalidCharacterError.prototype = novo Erro;
	InvalidCharacterError.prototype.code = 5;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
	função btoa(entrada) {
	  var str = String(entrada);
	  var saída = '';
	  por (
	    // inicializa o resultado e o contador
	    var bloco, charCode, idx = 0, map = chars;
	    // se o próximo índice str não existir:
	    // altera a tabela de mapeamento para "="
	    // verifica se d não possui dígitos fracionários
	    str.charAt(idx | 0) || (mapa = '=', idx % 1);
	    // "8 - idx % 1 * 8" gera a sequência 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new InvalidCharacterError('INVALID_CHARACTER_ERR: DOM Exception 5');
	    }
	    bloco = bloco << 8 | charCode;
	  }
	  saída de retorno;
	}
	
	modulo.exports = btoa;


/***/},
/* 11 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	modulo.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // O navegador padrão envs suporta document.cookie
	  (função padrãoBrowserEnv() {
	    Retorna {
	      write: function write(nome, valor, expira, caminho, domínio, seguro) {
	        var cookie = [];
	        cookie.push(nome + '=' + encodeURIComponent(valor));
	
	        if (utils.isNumber(expira)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(caminho)) {
	          cookie.push('caminho=' + caminho);
	        }
	
	        if (utils.isString(domínio)) {
	          cookie.push('domínio=' + domínio);
	        }
	
	        if (seguro === verdadeiro) {
	          cookie.push('seguro');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      leia: função ler(nome) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + nome + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remover: função remove(nome) {
	        this.write(nome, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Env de navegador não padrão (trabalhadores da web, react-native) carece de suporte necessário.
	  (função nonStandardBrowserEnv() {
	    Retorna {
	      escrever: função escrever() {},
	      ler: função ler() { return null; },
	      remover: função remove() {}
	    };
	  })()
	);


/***/},
/* 12 */
/***/ function(módulo, exportações, __webpack_require__) {

	'usar estrito';
	
	var utils = __webpack_require__(3);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Adicione um novo interceptor à pilha
	 *
	 * @param {Function} cumprida A função para lidar com `then` para uma `Promise`
	 * @param {Function} rejeitado A função para lidar com `reject` para uma `Promise`
	 *
	 * @return {Number} Um ID usado para remover o interceptor posteriormente
	 */
	InterceptorManager.prototype.use = function use(preenchido, rejeitado) {
	  this.handlers.push({
	    cumprido: cumprido,
	    rejeitado: rejeitado
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remova um interceptor da pilha
	 *
	 * @param {Number} id O ID que foi retornado por `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterar sobre todos os interceptores registrados
	 *
	 * Este método é particularmente útil para pular qualquer
	 * interceptadores que podem ter se tornado `null` chamando `eject`.
	 *
	 * @param {Function} fn A função a ser chamada para cada interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h!== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/},
/* 13 */
/***/ function(módulo, exporta) {

	'usar estrito';
	
	/**
	 * Determina se a URL especificada é absoluta
	 *
	 * @param {string} url A URL a ser testada
	 * @returns {boolean} Verdadeiro se o URL especificado for absoluto, caso contrário, falso
	 */
	module.exports = function isAbsoluteURL(url) {
	  // Um ​​URL é considerado absoluto se começar com "<scheme>://" ou "//" (URL relativo ao protocolo).
	  // RFC 3986 define o nome do esquema como uma sequência de caracteres começando com uma letra e seguido
	  // por qualquer combinação de letras, dígitos, mais, ponto ou hífen.
	  return /^([az][az\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/},
/* 14 */
/***/ function(módulo, exporta) {

	'usar estrito';
	
	/**
	 * Cria um novo URL combinando os URLs especificados
	 *
	 * @param {string} baseURL A URL base
	 * @param {string} relativeURL A URL relativa
	 * @returns {string} O URL combinado
	 */
	module.exports = função combineURLs(baseURL, parentURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativoURL.replace(/^\/+/, '');
	};


/***/},
/* 15 */
/***/ function(módulo, exporta) {

	'usar estrito';
	
	module.exports = function bind(fn, thisArg) {
	  função de retorno wrap() {
	    var args = new Array(argumentos.comprimento);
	    for (var i = 0; i < args.length; i++) {
	      argumentos[i] = argumentos[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/},
/* 16 */
/***/ function(módulo, exporta) {

	'usar estrito';
	
	/**
	 * Açúcar sintático para invocar uma função e expandir uma matriz para argumentos.
	 *
	 * Caso de uso comum seria usar `Function.prototype.apply`.
	 *
	 * ``` js
	 * função f(x, y, z) {}
	 * var argumentos = [1, 2, 3];
	 * f.apply(null, args);
	 * ```
	 *
	 * Com `spread` este exemplo pode ser reescrito.
	 *
	 * ``` js
	 * spread(função(x, y, z) {})([1, 2, 3]);
	 * ```
	 *
	 * @param {Function} retorno de chamada
	 * @returns {Função}
	 */
	module.exports = function spread(callback) {
	  função de retorno wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }
/*******/ ])
});
;
//# sourceMappingURL=axios.map