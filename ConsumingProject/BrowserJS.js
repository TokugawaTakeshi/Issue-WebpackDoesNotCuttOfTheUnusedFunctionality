(()=>{"use strict";function e(e){return null!==e}function t(e){return void 0!==e}function i(e,t){return void 0===e?t:e}function a(e,t){return t?e:""}function o(e){return"string"==typeof e}function n(e){if(o(e))return e;if(e instanceof Error)return String(e);if("object"==typeof(t=e)&&null!==t)try{const t=JSON.stringify(e,null,2);return"{}"===t?"{}":"[]"===t?"[]":t}catch{return String(e)}var t;return String(e)}class r{static setImplementation(e){return r.implementation=e,r}static setLocalization(e){return r.localization=e,r}static throwErrorAndLog(i){if(e(r.implementation))return r.implementation.throwErrorAndLog(i);if("errorInstance"in i)throw i.errorInstance.message=`${i.title}\n${i.errorInstance.message}\n\n${r.localization.occurrenceLocation}: ${i.occurrenceLocation}${a(`\n\n${r.localization.wrappableError}:\n${n(i.wrappableError)}`,t(i.wrappableError))}${a(`\n\n${r.localization.appendedData}:\n${n(i.additionalData)}`,t(i.additionalData))}\n`,i.errorInstance;const o=new Error(i.description);throw o.name=i.errorType,o}static logError(o){e(r.implementation)?r.implementation.logError(o):console.error(`[ ${i(o.customBadgeText,r.localization.badgesDefaultTitles.error)} ] ${o.title}\n${o.description}\n\n${r.localization.errorType}: ${o.errorType}\n${r.localization.occurrenceLocation}: ${o.occurrenceLocation}${a(`\n\n${r.localization.caughtError}:\n${n(o.caughtError)}`+(o.caughtError instanceof Error?`\n${o.caughtError.stack}`:""),t(o.caughtError))}${a(`\n\n${r.localization.appendedData}:\n${n(o.additionalData)}`,t(o.additionalData))}`)}static logErrorLikeMessage(t){e(r.implementation)?r.implementation.logErrorLikeMessage(t):console.error(r.formatGenericLog(t,r.localization.badgesDefaultTitles.error))}static logWarning(o){e(r.implementation)?r.implementation.logWarning(o):console.warn(`[ ${i(o.customBadgeText,r.localization.badgesDefaultTitles.warning)} ] ${o.title}\n${o.description}\n\n${a(`${r.localization.occurrenceLocation}: ${o.occurrenceLocation}`,t(o.occurrenceLocation))}\n\n${a(`${r.localization.appendedData}: ${n(o.additionalData)}`,t(o.additionalData))}`)}static logInfo(t){e(r.implementation)?r.implementation.logInfo(t):console.info(r.formatGenericLog(t,r.localization.badgesDefaultTitles.info))}static logSuccess(t){e(r.implementation)?r.implementation.logSuccess(t):console.info(r.formatGenericLog(t,r.localization.badgesDefaultTitles.success))}static highlightText(t){return e(r.implementation)?r.implementation.highlightText(t):t}static formatGenericLog(e,o){return`[ ${i(e.customBadgeText,o)} ] ${e.title}\n${e.description}\n\n${a(`${r.localization.appendedData}: ${n(e.additionalData)}`,t(e.additionalData))}`}}r.implementation=null,r.localization={badgesDefaultTitles:{error:"Error",warning:"Warning",success:"Success",info:"Info"},errorType:"Error type",occurrenceLocation:"Occurrence location",caughtError:"Caught error",wrappableError:"Wrappable error",appendedData:"Appended data"};const l=r;class s extends Error{constructor(e){super(),this.name=s.NAME,this.message=e}static get DEFAULT_TITLE(){return s.localization.defaultTitle}static setLocalization(e){s.localization=e}}s.NAME="UnexpectedEventError",s.localization={defaultTitle:"Unexpected event occurred"};const c=s,m={elementNotFoundErrorMessage:"Element satisfied to specified predicate not found. As it follows from the function name, non-existing array element considering as error."};var u;!function(e){let t=m;e.setLocalization=function(e){t=e},e.getArrayElementWhichMustExistByPredicate=function(e,i){const a=e.find(i);return void 0===a&&l.throwErrorAndLog({errorInstance:new c(t.elementNotFoundErrorMessage),title:c.DEFAULT_TITLE,occurrenceLocation:"getArrayElementWhichMustExistByPredicate(targetArray, predicate)"}),a}}(u||(u={})),u.getArrayElementWhichMustExistByPredicate;const d={elementNotFoundErrorMessage:"The array is empty so it has not last element.. As it follows from the function name, the empty arrays are considering as error."};var p,g,f,T,E;function h(e){return"number"==typeof e&&Number.isInteger(e)&&e>=0}function y(e){return void 0===e}!function(e){let t=d;e.setLocalization=function(e){t=e},e.getLastElementOfNonEmptyArray=function(e){return 0===e.length&&l.throwErrorAndLog({errorInstance:new c(t.elementNotFoundErrorMessage),title:c.DEFAULT_TITLE,occurrenceLocation:"getLastElementOfNonEmptyArray(targetArray)"}),e[e.length-1]}}(p||(p={})),p.getLastElementOfNonEmptyArray,function(e){e.isStringOfLength=function(e,t){return"string"==typeof e&&(h(t.exactSymbolsCount)?e.length===t.exactSymbolsCount:h(t.minimalSymbolsCount)&&h(t.maximalSymbolsCount)?e.length>=t.minimalSymbolsCount&&e.length<=t.maximalSymbolsCount:h(t.minimalSymbolsCount)?e.length>=t.minimalSymbolsCount:!!h(t.maximalSymbolsCount)&&e.length<=t.maximalSymbolsCount)}}(g||(g={})),g.isStringOfLength,function(e){e.isArrayOfLength=function(e,t){return!!Array.isArray(e)&&(h(t.exactElementsCount)?e.length===t.exactElementsCount:h(t.minimalElementsCount)&&h(t.maximalElementsCount)?e.length>=t.minimalElementsCount&&e.length<=t.maximalElementsCount:h(t.minimalElementsCount)?e.length>=t.minimalElementsCount:!!h(t.maximalElementsCount)&&e.length<=t.maximalElementsCount)}}(f||(f={})),f.isArrayOfLength,function(e){e.regularSpace=" ",e.noBreakSpace=" ",e.enSpace=" ",e.emSpace=" ",e.threePerEmSpace=" ",e.forPerEmSpace=" ",e.sixPerEmSpace=" ",e.figureSpace=" ",e.punctuationSpace=" ",e.thinSpace=" ",e.hairSpace=" ",e.zeroWidthSpace="​",e.ideographicSpace="　",e.zeroWithNoBreakSpace="\ufeff",e.characterTabulation="\t"}(T||(T={})),function(e){e.regularSpace="\\u{0020}",e.noBreakSpace="\\u{00A0}",e.enSpace="\\u{2002}",e.emSpace="\\u{2003}",e.threePerEmSpace="\\u{2004}",e.forPerEmSpace="\\u{2005}",e.sixPerEmSpace="\\u{2006}",e.figureSpace="\\u{2007}",e.punctuationSpace="\\u{2008}",e.thinSpace="\\u{2009}",e.hairSpace="\\u{200A}",e.zeroWidthSpace="\\u{200B}",e.ideographicSpace="\\u{3000}",e.zeroWithNoBreakSpace="\\u{FEFF}",e.characterTabulation="\\u{0009}"}(E||(E={}));const S="abcdefghijklmnopqrstuvwxyz".split(""),b="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),L=["0","1","2","3","4","5","6","7","8","9"];function x(e){return"string"==typeof e&&e.length>0?e:""}function z({minimalValue:e,maximalValue:t}){return Math.floor(Math.random()*(t-e+1)+e)}function A(e,t={}){return null==e||!1===t.condition?"":void 0===t.modifier?e:t.modifier(e)}const M={defaultTitle:"Invalid parameter value",genericDescriptionPartTemplate:e=>`The value of parameter ${e.parameterName} is invalid.${A(e.messageSpecificPart,{modifier:e=>`\n${e}`})}`};class C extends Error{constructor(e){super(),this.name=C.NAME,this.message="customMessage"in e?e.customMessage:C.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return C.localization.defaultTitle}static setLocalization(e){C.localization=e}}C.NAME="InvalidParameterValueError",C.localization=M;const D=C;class N extends Error{constructor(e){super(),this.name=N.NAME,this.message="customMessage"in e?e.customMessage:N.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return N.localization.defaultTitle}static setLocalization(e){N.localization=e}}N.NAME="IncompatiblePropertiesError",N.localization={defaultTitle:"Incompatible properties in object-type parameter",genericDescriptionPartTemplate:e=>`In parameter '${e.parameterName}, property '${e.conflictingPropertyName}' is incompatible with properties:${e.incompatiblePropertiesNames.reduce(((e,t)=>`${e}\n- ${t}`),"")}`};const $=N;class I{static getRandomString(e){const t=x(e.prefix),a=x(e.infix),o=x(e.postfix),n=t.length+a.length+o.length;let r;if(y(e.fixedSymbolsCount)){const l=I.getMinimalSymbolsCount({prefixInfixAndPostfixTotalSymbolsCount:n,minimalSymbolsCount__explicitlySpecified:e.minimalSymbolsCount,fixedSymbolsCount__explicitlySpecified:e.fixedSymbolsCount,minimalRandomlyGeneratedSymbolsCount__explicitlySpecified:e.minimalRandomlyGeneratedSymbolsCount}),s=n+i(e.minimalRandomlyGeneratedSymbolsCount,0)<=l?l-n:i(e.minimalRandomlyGeneratedSymbolsCount,0);r=z({minimalValue:s,maximalValue:I.getMaximalSymbolsCont({...e,minimalSymbolsCount:l,prefix:t,infix:a,postfix:o,minimalRandomlyGeneratedSymbolsCount:s})-n})}else r=e.fixedSymbolsCount-n-i(e.minimalRandomlyGeneratedSymbolsCount,0);let l="";const s=I.getCharactersForRandomStringGeneration(e.allowedSymbols);for(let e=l.length;e<r;e++)l=`${l}${c=s,c[z({minimalValue:0,maximalValue:c.length-1})]}`;var c;if(a.length>0){const e=z({minimalValue:1,maximalValue:l.length-2}),t=l.slice(0,e),i=l.slice(e);l=`${t}${a}${i}`}return`${t}${l}${o}`}static setLocalization(e){I.localization=e}static getMinimalSymbolsCount({prefixInfixAndPostfixTotalSymbolsCount:e,minimalSymbolsCount__explicitlySpecified:a,fixedSymbolsCount__explicitlySpecified:o,minimalRandomlyGeneratedSymbolsCount__explicitlySpecified:n}){if(y(a))return e+i(n,0);t(o)&&l.throwErrorAndLog({errorInstance:new $({parameterName:"parametersObject",conflictingPropertyName:"fixedSymbolsCount__explicitlySpecified",incompatiblePropertiesNames:["minimalSymbolsCount__explicitlySpecified"]}),title:$.DEFAULT_TITLE,occurrenceLocation:"getRandomString(parametersObject)"}),a<0&&l.throwErrorAndLog({errorInstance:new D({parameterName:"parametersObject.minimalSymbolsCount",messageSpecificPart:I.localization.errors.minimalSymbolsCountMustBeGreaterThan0(a)}),title:D.DEFAULT_TITLE,occurrenceLocation:"RandomStringsGenerator.getRandomString(parametersObject)"});const r=e+i(n,0);return a>=r?a:r}static getMaximalSymbolsCont(e){if(y(e.maximalSymbolsCount))return I.DEFAULT_MAXIMAL_TO_MINIMAL_SYMBOLS_COUNT_RATIO*e.minimalSymbolsCount;t(e.fixedSymbolsCount)&&l.throwErrorAndLog({errorInstance:new $({parameterName:"parametersObject",conflictingPropertyName:"fixedSymbolsCount",incompatiblePropertiesNames:["maximalSymbolsCount"]}),title:$.DEFAULT_TITLE,occurrenceLocation:"getRandomString(parametersObject)"});const i=e.maximalSymbolsCount;return e.prefix.length+e.infix.length+e.postfix.length+e.minimalRandomlyGeneratedSymbolsCount>i?l.throwErrorAndLog({errorInstance:new D({parameterName:"parametersObject.minimalSymbolsCount",messageSpecificPart:I.localization.errors.sumOfSymbolsCountOfAffixesAndMinimalRandomlyGeneratedSymbolsCountIsExceedsMaximalSymbolsCount(e)}),title:D.DEFAULT_TITLE,occurrenceLocation:"RandomStringsGenerator.getRandomString(parametersObject)"}):e.minimalSymbolsCount>i&&l.throwErrorAndLog({errorInstance:new D({parameterName:"parametersObject.minimalSymbolsCount",messageSpecificPart:I.localization.errors.explicitlySpecifiedMinimalSymbolsCountExceedsMaximalSymbolsCount({minimalSymbolsCount:e.minimalSymbolsCount,maximalSymbolsCount:i})}),title:D.DEFAULT_TITLE,occurrenceLocation:"RandomStringsGenerator.getRandomString(parametersObject)"}),i}static getCharactersForRandomStringGeneration(e={latinUppercase:!0,latinLowercase:!0,digits:!0}){const t=[];!0===e.latinUppercase&&t.push(...b),!0===e.latinLowercase&&t.push(...S),!0===e.digits&&t.push(...L);const i=[];if(Array.isArray(e.other))for(const e of i)i.push(...e.split(""));else o(e.other)&&i.push(...e.other.split(""));return t.push(...i),0===t.length&&l.throwErrorAndLog({errorInstance:new D({parameterName:"parametersObject.allowedSymbols",customMessage:I.localization.errors.noAllowedSymbolsForRandomGeneration}),title:D.DEFAULT_TITLE,occurrenceLocation:"RandomStringsGenerator.getRandomString(parametersObject)"}),t}}var P,F;I.localization={errors:{minimalSymbolsCountMustBeGreaterThan0:e=>`The 'minimalSymbolsCount' property must be greater than 0 while really it's ${e}`,sumOfSymbolsCountOfAffixesAndMinimalRandomlyGeneratedSymbolsCountIsExceedsMaximalSymbolsCount:e=>`The sum of symbols count of 'prefix', 'infix' and 'postfix' and also 'minimalRandomlyGeneratedSymbolsCount' are exceeds the 'maximalSymbolsCount':\n                       prefix.length: ${e.prefix.length}                        infix.length: ${e.infix.length}                      postfix.length: ${e.postfix.length}minimalRandomlyGeneratedSymbolsCount: ${e.minimalRandomlyGeneratedSymbolsCount}                            SUBTOTAL: ${e.prefix.length+e.infix.length+e.postfix.length+e.minimalRandomlyGeneratedSymbolsCount}                 maximalSymbolsCount: ${e.maximalSymbolsCount}`,explicitlySpecifiedMinimalSymbolsCountExceedsMaximalSymbolsCount:({minimalSymbolsCount:e,maximalSymbolsCount:t})=>`The explicitly specified minimal symbols count (${e}) exceeds the maximal symbols count ${t}`,noAllowedSymbolsForRandomGeneration:"No symbols for the random string generation has been allowed allowed.Check the 'parametersObject.allowedSymbols' and satisfy at least on of below conditions:\n  * Set 'latinUppercase' property to true\n  * Set 'latinLowercase' property to true\n  * Set 'digits' property to true\n  * Set 'other' property to non-empty array\n"}},I.DEFAULT_MAXIMAL_TO_MINIMAL_SYMBOLS_COUNT_RATIO=2,I.getRandomString,function(e){e.get="GET",e.post="POST",e.create="CREATE",e.put="PUT",e.delete="DELETE",e.options="OPTIONS",e.head="HEAD",e.connect="CONNECT",e.trace="TRACE",e.patch="PATCH"}(P||(P={})),function(e){e[e.continue=100]="continue",e[e.switchingProtocols=101]="switchingProtocols",e[e.OK=200]="OK",e[e.created=200]="created",e[e.nonAuthoritativeInformation=203]="nonAuthoritativeInformation",e[e.noContent=204]="noContent",e[e.resetContent=205]="resetContent",e[e.partialContent=206]="partialContent",e[e.multipleChoices=300]="multipleChoices",e[e.movedPermanently=301]="movedPermanently",e[e.found=302]="found",e[e.seeOther=303]="seeOther",e[e.notModified=304]="notModified",e[e.useProxy=305]="useProxy",e[e.unused=306]="unused",e[e.temporaryRedirect=307]="temporaryRedirect",e[e.badRequest=400]="badRequest",e[e.unauthorized=401]="unauthorized",e[e.paymentRequired=402]="paymentRequired",e[e.forbidden=403]="forbidden",e[e.notFound=404]="notFound",e[e.methodNotAllowed=405]="methodNotAllowed",e[e.notAcceptable=406]="notAcceptable",e[e.proxyAuthenticationRequired=407]="proxyAuthenticationRequired",e[e.requestTimeout=408]="requestTimeout",e[e.conflict=409]="conflict",e[e.gone=410]="gone",e[e.lengthRequired=411]="lengthRequired",e[e.preconditionFailed=412]="preconditionFailed",e[e.requestEntityTooLarge=413]="requestEntityTooLarge",e[e.requestURL_TooLong=414]="requestURL_TooLong",e[e.unsupportedMediaType=415]="unsupportedMediaType",e[e.requestedRangeNotSatisfiable=416]="requestedRangeNotSatisfiable",e[e.expectationFailed=417]="expectationFailed",e[e.internalServerError=500]="internalServerError",e[e.notImplemented=501]="notImplemented",e[e.badGateway=502]="badGateway",e[e.serviceUnavailable=503]="serviceUnavailable",e[e.gatewayTimeout=504]="gatewayTimeout",e[e.HTTP_VersionNotSupported=505]="HTTP_VersionNotSupported"}(F||(F={}));class _ extends Error{constructor(e){super(),this.name=_.NAME,this.message=e}static get DEFAULT_TITLE(){return _.localization.defaultTitle}static setLocalization(e){_.localization=e}}_.NAME="AlgorithmMismatchError",_.localization={defaultTitle:"Desired and real behaviour mismatch"};class w extends Error{constructor(e){super(),this.name=w.NAME,this.message="customMessage"in e?e.customMessage:w.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return w.localization.defaultTitle}static setLocalization(e){w.localization=e}}w.NAME="RedundantSubsequentClassInitializationError",w.localization={defaultTitle:"Class redundant subsequent initialization",genericDescriptionPartTemplate:e=>`Class: '${e.className}' must be initialized only one time.`};class R extends Error{constructor(e){super(),this.name=R.NAME,this.message="customMessage"in e?e.customMessage:R.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return R.localization.defaultTitle}static setLocalization(e){R.localization=e}}R.NAME="ClassRequiredInitializationHasNotBeenExecutedError",R.localization={defaultTitle:"Class required initialization has not been executed",genericDescriptionPartTemplate:e=>`Class: ${e.className} required the initialization but initializing method ${e.initializingMethodName} has not been called.`};const O={defaultTitle:"Configuration file not found",genericDescriptionPartTemplate:e=>Array.isArray(e.configFilePathOrMultipleOfThem)?`None of below ${e.targetTechnologyName} configuration files found.\n${e.configFilePathOrMultipleOfThem.join(", ")}`:`The ${e.targetTechnologyName} configuration file ${e.configFilePathOrMultipleOfThem} not found.`};class U extends Error{constructor(e){super(),this.name=U.NAME,this.message="customMessage"in e?e.customMessage:U.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return U.localization.defaultTitle}static setLocalization(e){U.localization=e}}U.NAME="ConfigFileNotFoundError",U.localization=O;class v extends Error{constructor(e){super(),this.name=v.NAME,this.message=e}static get DEFAULT_TITLE(){return v.localization.defaultTitle}static setLocalization(e){v.localization=e}}v.NAME="CrossBrowserIssueError",v.localization={defaultTitle:"Cross-browser issue"};class G extends Error{constructor(e){super(),this.name=G.NAME,this.message="customMessage"in e?e.customMessage:G.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return G.localization.defaultTitle}static setLocalization(e){G.localization=e}}G.NAME="DataRetrievingFailedError",G.localization={defaultTitle:"Retrieving of the data from data source failed",genericDescriptionPartTemplate:e=>`The error occurred during the retrieving of data ${e.mentionToData} from he external data source`};class q extends Error{constructor(e){super(),this.name=q.NAME,this.message="customMessage"in e?e.customMessage:q.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return q.localization.defaultTitle}static setLocalization(e){q.localization=e}}q.NAME="DataSubmittingFailedError",q.localization={defaultTitle:"Data submitting failure",genericDescriptionPartTemplate:e=>`The error occurred during submitting of data ${e.mentionToData}.`};class B extends Error{constructor(e){super(),this.name=B.NAME,this.message="customMessage"in e?e.customMessage:B.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return B.localization.defaultTitle}static setLocalization(e){B.localization=e}}B.NAME="DOM_ElementRetrievingFailedError",B.localization={defaultTitle:"DOM Element not found",genericDescriptionPartTemplate:e=>`The DOM element with selector: ${e.selector} not found.`};class j extends Error{constructor(e){super(),this.name=j.NAME,this.message="customMessage"in e?e.customMessage:j.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return j.localization.defaultTitle}static setLocalization(e){j.localization=e}}j.NAME="FileReadingFailure",j.localization={defaultTitle:"File reading failure",genericDescriptionPartTemplate:e=>`The error occurred during the reading of the file with path :${e.filePath}`};class W extends Error{constructor(e){super(),this.name=W.NAME,this.message="customMessage"in e?e.customMessage:W.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return W.localization.defaultTitle}static setLocalization(e){W.localization=e}}W.NAME="FileWritingFailedError",W.localization={defaultTitle:"ファイル書き込み失敗",genericDescriptionPartTemplate:e=>`ファイル「${e.filePath}」の書き込み中エラーが発生しました。`};class V extends Error{constructor(e){super(),this.name=V.NAME,this.message=e}static get DEFAULT_TITLE(){return V.localization.defaultTitle}static setLocalization(e){V.localization=e}}V.NAME="ImproperUsageError",V.localization={defaultTitle:"Improper usage"};class k extends Error{constructor(e){super(),this.name=k.NAME,this.message=e}static get DEFAULT_TITLE(){return k.localization.defaultTitle}static setLocalization(e){k.localization=e}}k.NAME="InterProcessInteractionFailedError",k.localization={defaultTitle:"Inter process interaction failure"};const H={defaultTitle:"Invalid config",genericDescriptionPartTemplate:e=>`The ${e.mentionToConfig} config is invalid.${A(e.messageSpecificPart,{modifier:e=>`\n${e}`})}`};class K extends Error{constructor(e){super(),this.name=K.NAME,this.message="customMessage"in e?e.customMessage:K.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return K.localization.defaultTitle}static setLocalization(e){K.localization=e}}K.NAME="InvalidConfigError",K.localization=H;const X={defaultTitle:"Invalid external data",genericDescriptionPartTemplate:e=>`The data: ${e.mentionToExpectedData} does not match with expected.${A(e.messageSpecificPart,{modifier:e=>`\n${e}`})}`};class Y extends Error{constructor(e){super(),this.name=Y.NAME,this.message="customMessage"in e?e.customMessage:Y.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return Y.localization.defaultTitle}static setLocalization(e){Y.localization=e}}Y.NAME="InvalidExternalDataError",Y.localization=X;class J extends Error{constructor(e){super(),this.name=J.NAME,this.message="customMessage"in e?e.customMessage:J.localization.genericDescriptionPartTemplate(e)}static get DEFAULT_TITLE(){return J.localization.defaultTitle}static setLocalization(e){J.localization=e}}J.NAME="ModuleDynamicLoadingFailure",J.localization={defaultTitle:"Module dynamic loading failure",genericDescriptionPartTemplate:e=>`The dynamic loading of module '${e.modulePath}' failed.`};class Q extends Error{constructor(e){super(),this.name=Q.NAME,this.message=e}static get DEFAULT_TITLE(){return Q.localization.defaultTitle}static setLocalization(e){Q.localization=e}}Q.NAME="UnsupportedScenarioError",Q.localization={defaultTitle:"Unsupported scenario"},console.log(y("ALPHA")),console.log("End of the script")})();