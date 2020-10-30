
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacecPipe implements PipeTransform {
    transform(value: any, character: string):string {
        return value.replace(character, '');
    }
}