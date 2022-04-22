import { Dto, Dtos } from "../abstractions/dto";

export function noSpaces(text: string) {
    const wordsArray = text.split(" ");
    return wordsArray.join("");
}

export function disregardCaseIncludes(baseText: string, searchText: string) {
    return baseText.toUpperCase().includes(searchText.toUpperCase());
}

export type StringGetter = (dto?: Dto | null, dtos1?: Dtos | null, dtos2?: Dtos | null) => string;