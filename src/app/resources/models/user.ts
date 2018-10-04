import { Model } from "./model"


export class User extends Model {

    public id: number
    public email: string
    public password: string
    public name: string
    public role: number = 2
    public active: boolean = false

    public _model: string = 'user'

    constructor(id?){
        super()
        if(id){
            this.get({id: id}, data => this.setValue(data), error => console.log(error))
        }
    }
}

