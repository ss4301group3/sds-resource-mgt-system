import { Dto } from "../abstractions/dto/Resource";

export function noSpaces(text: string) {
    const wordsArray = text.split(" ");
    return wordsArray.join("");
}

export type StringGetter = (dto?: Dto) => string;