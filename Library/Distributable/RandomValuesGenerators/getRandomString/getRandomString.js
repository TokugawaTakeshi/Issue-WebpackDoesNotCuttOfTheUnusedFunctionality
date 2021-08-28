import { latinSymbols__lowercase, latinSymbols__uppercase, stringifiedDigits } from "../../Strings/CharactersAssets";
import isString from "../../TypeGuards/Strings/isString";
import isUndefined from "../../TypeGuards/Nullables/isUndefined";
import isNotUndefined from "../../TypeGuards/Nullables/isNotUndefined";
import undefinedToEmptyString from "../../ValueTransformers/undefinedToEmptyString";
import substituteWhenUndefined from "../../DefaultValueSubstituters/substituteWhenUndefined";
import getRandomInteger from "../getRandomInteger";
import getRandomArrayElement from "../getRandomArrayElement";
import Logger from "../../Logging/Logger";
import InvalidParameterValueError from "../../Logging/Errors/InvalidParameterValue/InvalidParameterValueError";
import IncompatiblePropertiesInObjectTypeParameterError from "../../Logging/Errors/IncompatiblePropertiesInObjectTypeParameter/IncompatiblePropertiesInObjectTypeParameterError";
import GetRandomStringOperationLocalization__English from "./GetRandomStringOperationLocalization__English";
export class RandomStringsGenerator {
    static getRandomString(parametersObject) {
        const prefix = undefinedToEmptyString(parametersObject.prefix);
        const infix = undefinedToEmptyString(parametersObject.infix);
        const postfix = undefinedToEmptyString(parametersObject.postfix);
        const prefixInfixAndPostfixTotalSymbolsCount = prefix.length + infix.length + postfix.length;
        let randomlyGeneratedSymbolsCount;
        if (isUndefined(parametersObject.fixedSymbolsCount)) {
            const minimalSymbolsCount = RandomStringsGenerator.getMinimalSymbolsCount({
                prefixInfixAndPostfixTotalSymbolsCount,
                minimalSymbolsCount__explicitlySpecified: parametersObject.minimalSymbolsCount,
                fixedSymbolsCount__explicitlySpecified: parametersObject.fixedSymbolsCount,
                minimalRandomlyGeneratedSymbolsCount__explicitlySpecified: parametersObject.minimalRandomlyGeneratedSymbolsCount
            });
            const minimalRandomlyGeneratedSymbolsCount = prefixInfixAndPostfixTotalSymbolsCount +
                substituteWhenUndefined(parametersObject.minimalRandomlyGeneratedSymbolsCount, 0) <=
                minimalSymbolsCount ?
                minimalSymbolsCount - prefixInfixAndPostfixTotalSymbolsCount :
                substituteWhenUndefined(parametersObject.minimalRandomlyGeneratedSymbolsCount, 0);
            const maximalSymbolsCount = RandomStringsGenerator.getMaximalSymbolsCont({
                ...parametersObject,
                ...{ minimalSymbolsCount, prefix, infix, postfix, minimalRandomlyGeneratedSymbolsCount }
            });
            const maximalRandomlyGeneratedSymbolsCount = maximalSymbolsCount - prefixInfixAndPostfixTotalSymbolsCount;
            randomlyGeneratedSymbolsCount = getRandomInteger({
                minimalValue: minimalRandomlyGeneratedSymbolsCount,
                maximalValue: maximalRandomlyGeneratedSymbolsCount
            });
        }
        else {
            randomlyGeneratedSymbolsCount = parametersObject.fixedSymbolsCount -
                prefixInfixAndPostfixTotalSymbolsCount -
                substituteWhenUndefined(parametersObject.minimalRandomlyGeneratedSymbolsCount, 0);
        }
        let randomString = "";
        const characters = RandomStringsGenerator.
            getCharactersForRandomStringGeneration(parametersObject.allowedSymbols);
        for (let loopCounter = randomString.length; loopCounter < randomlyGeneratedSymbolsCount; loopCounter++) {
            randomString = `${randomString}${getRandomArrayElement(characters)}`;
        }
        if (infix.length > 0) {
            const randomStringSlicingPosition = getRandomInteger({
                minimalValue: 1, maximalValue: randomString.length - 2
            });
            const randomString__firstPart = randomString.slice(0, randomStringSlicingPosition);
            const randomString__secondPart = randomString.slice(randomStringSlicingPosition);
            randomString = `${randomString__firstPart}${infix}${randomString__secondPart}`;
        }
        return `${prefix}${randomString}${postfix}`;
    }
    static setLocalization(localization) {
        RandomStringsGenerator.localization = localization;
    }
    static getMinimalSymbolsCount({ prefixInfixAndPostfixTotalSymbolsCount, minimalSymbolsCount__explicitlySpecified, fixedSymbolsCount__explicitlySpecified, minimalRandomlyGeneratedSymbolsCount__explicitlySpecified }) {
        if (isUndefined(minimalSymbolsCount__explicitlySpecified)) {
            return prefixInfixAndPostfixTotalSymbolsCount +
                substituteWhenUndefined(minimalRandomlyGeneratedSymbolsCount__explicitlySpecified, 0);
        }
        if (isNotUndefined(fixedSymbolsCount__explicitlySpecified)) {
            Logger.throwErrorAndLog({
                errorInstance: new IncompatiblePropertiesInObjectTypeParameterError({
                    parameterName: "parametersObject",
                    conflictingPropertyName: "fixedSymbolsCount__explicitlySpecified",
                    incompatiblePropertiesNames: ["minimalSymbolsCount__explicitlySpecified"]
                }),
                title: IncompatiblePropertiesInObjectTypeParameterError.DEFAULT_TITLE,
                occurrenceLocation: "getRandomString(parametersObject)"
            });
        }
        if (minimalSymbolsCount__explicitlySpecified < 0) {
            Logger.throwErrorAndLog({
                errorInstance: new InvalidParameterValueError({
                    parameterName: "parametersObject.minimalSymbolsCount",
                    messageSpecificPart: RandomStringsGenerator.localization.errors.minimalSymbolsCountMustBeGreaterThan0(minimalSymbolsCount__explicitlySpecified)
                }),
                title: InvalidParameterValueError.DEFAULT_TITLE,
                occurrenceLocation: "RandomStringsGenerator.getRandomString(parametersObject)"
            });
        }
        const actuallyRequiredMinimalSymbolsCount = prefixInfixAndPostfixTotalSymbolsCount +
            substituteWhenUndefined(minimalRandomlyGeneratedSymbolsCount__explicitlySpecified, 0);
        return minimalSymbolsCount__explicitlySpecified >= actuallyRequiredMinimalSymbolsCount ?
            minimalSymbolsCount__explicitlySpecified : actuallyRequiredMinimalSymbolsCount;
    }
    static getMaximalSymbolsCont(parametersObject) {
        if (isUndefined(parametersObject.maximalSymbolsCount)) {
            return RandomStringsGenerator.DEFAULT_MAXIMAL_TO_MINIMAL_SYMBOLS_COUNT_RATIO * parametersObject.minimalSymbolsCount;
        }
        if (isNotUndefined(parametersObject.fixedSymbolsCount)) {
            Logger.throwErrorAndLog({
                errorInstance: new IncompatiblePropertiesInObjectTypeParameterError({
                    parameterName: "parametersObject",
                    conflictingPropertyName: "fixedSymbolsCount",
                    incompatiblePropertiesNames: ["maximalSymbolsCount"]
                }),
                title: IncompatiblePropertiesInObjectTypeParameterError.DEFAULT_TITLE,
                occurrenceLocation: "getRandomString(parametersObject)"
            });
        }
        const maximalSymbolsCount = parametersObject.maximalSymbolsCount;
        if (parametersObject.prefix.length +
            parametersObject.infix.length +
            parametersObject.postfix.length +
            parametersObject.minimalRandomlyGeneratedSymbolsCount >
            maximalSymbolsCount) {
            Logger.throwErrorAndLog({
                errorInstance: new InvalidParameterValueError({
                    parameterName: "parametersObject.minimalSymbolsCount",
                    messageSpecificPart: RandomStringsGenerator.localization.errors.
                        sumOfSymbolsCountOfAffixesAndMinimalRandomlyGeneratedSymbolsCountIsExceedsMaximalSymbolsCount(parametersObject)
                }),
                title: InvalidParameterValueError.DEFAULT_TITLE,
                occurrenceLocation: "RandomStringsGenerator.getRandomString(parametersObject)"
            });
        }
        else if (parametersObject.minimalSymbolsCount > maximalSymbolsCount) {
            Logger.throwErrorAndLog({
                errorInstance: new InvalidParameterValueError({
                    parameterName: "parametersObject.minimalSymbolsCount",
                    messageSpecificPart: RandomStringsGenerator.localization.errors.
                        explicitlySpecifiedMinimalSymbolsCountExceedsMaximalSymbolsCount({
                        minimalSymbolsCount: parametersObject.minimalSymbolsCount, maximalSymbolsCount
                    })
                }),
                title: InvalidParameterValueError.DEFAULT_TITLE,
                occurrenceLocation: "RandomStringsGenerator.getRandomString(parametersObject)"
            });
        }
        return maximalSymbolsCount;
    }
    static getCharactersForRandomStringGeneration(allowedSymbols = {
        latinUppercase: true,
        latinLowercase: true,
        digits: true
    }) {
        const charactersForRandomStringGeneration = [];
        if (allowedSymbols.latinUppercase === true) {
            charactersForRandomStringGeneration.push(...latinSymbols__uppercase);
        }
        if (allowedSymbols.latinLowercase === true) {
            charactersForRandomStringGeneration.push(...latinSymbols__lowercase);
        }
        if (allowedSymbols.digits === true) {
            charactersForRandomStringGeneration.push(...stringifiedDigits);
        }
        const otherSymbols = [];
        if (Array.isArray(allowedSymbols.other)) {
            for (const arrayElement__possiblyHasMoreThanOneCharacter of otherSymbols) {
                otherSymbols.push(...arrayElement__possiblyHasMoreThanOneCharacter.split(""));
            }
        }
        else if (isString(allowedSymbols.other)) {
            otherSymbols.push(...allowedSymbols.other.split(""));
        }
        charactersForRandomStringGeneration.push(...otherSymbols);
        if (charactersForRandomStringGeneration.length === 0) {
            Logger.throwErrorAndLog({
                errorInstance: new InvalidParameterValueError({
                    parameterName: "parametersObject.allowedSymbols",
                    customMessage: RandomStringsGenerator.localization.errors.noAllowedSymbolsForRandomGeneration
                }),
                title: InvalidParameterValueError.DEFAULT_TITLE,
                occurrenceLocation: "RandomStringsGenerator.getRandomString(parametersObject)"
            });
        }
        return charactersForRandomStringGeneration;
    }
}
RandomStringsGenerator.localization = GetRandomStringOperationLocalization__English;
RandomStringsGenerator.DEFAULT_MAXIMAL_TO_MINIMAL_SYMBOLS_COUNT_RATIO = 2;
export default RandomStringsGenerator.getRandomString;
