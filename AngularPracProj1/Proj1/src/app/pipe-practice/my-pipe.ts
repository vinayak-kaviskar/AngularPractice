import { PipeTransform, Pipe } from "@angular/core";

@Pipe({

    name:"mycustompipe"

})
export class MyPipe implements PipeTransform {



    transform(value: any) {

        return value.substr(0, 5);

        //throw new Error("Method not implemented.");
    }


}
