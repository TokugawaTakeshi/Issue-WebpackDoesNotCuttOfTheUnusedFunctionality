export declare class RandomStringsGenerator {
    private static localization;
    private static readonly DEFAULT_MAXIMAL_TO_MINIMAL_SYMBOLS_COUNT_RATIO;
    static getRandomString(parametersObject: RandomStringsGenerator.ParametersObject): string;
    static setLocalization(localization: RandomStringsGenerator.Localization): void;
    private static getMinimalSymbolsCount;
    private static getMaximalSymbolsCont;
    private static getCharactersForRandomStringGeneration;
}
export declare namespace RandomStringsGenerator {
    type ParametersObject = {
        prefix?: string;
        infix?: string;
        postfix?: string;
        minimalRandomlyGeneratedSymbolsCount?: number;
        fixedSymbolsCount?: number;
        minimalSymbolsCount?: number;
        maximalSymbolsCount?: number;
        allowedSymbols?: ParametersObject.AllowedSymbols;
    };
    namespace ParametersObject {
        type AllowedSymbols = {
            latinUppercase?: boolean;
            latinLowercase?: boolean;
            digits?: boolean;
            other?: Array<string> | string;
        };
    }
    namespace MinimalSymbolsCountComputing {
        type ParametersObject = {
            prefixInfixAndPostfixTotalSymbolsCount: number;
            minimalSymbolsCount__explicitlySpecified?: number;
            fixedSymbolsCount__explicitlySpecified?: number;
            minimalRandomlyGeneratedSymbolsCount__explicitlySpecified?: number;
        };
    }
    namespace MaximalSymbolsCountComputing {
        type ParametersObject = RandomStringsGenerator.ParametersObject & {
            minimalSymbolsCount: number;
            prefix: string;
            infix: string;
            postfix: string;
            minimalRandomlyGeneratedSymbolsCount: number;
        };
    }
    type Localization = {
        errors: {
            minimalSymbolsCountMustBeGreaterThan0: (realValue: number) => string;
            sumOfSymbolsCountOfAffixesAndMinimalRandomlyGeneratedSymbolsCountIsExceedsMaximalSymbolsCount: (parametersObject: MaximalSymbolsCountComputing.ParametersObject) => string;
            explicitlySpecifiedMinimalSymbolsCountExceedsMaximalSymbolsCount: (parametersObject: {
                minimalSymbolsCount: number;
                maximalSymbolsCount: number;
            }) => string;
            noAllowedSymbolsForRandomGeneration: string;
        };
    };
}
declare const _default: typeof RandomStringsGenerator.getRandomString;
export default _default;
