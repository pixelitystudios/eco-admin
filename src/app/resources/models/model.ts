import { HttpClient, HttpXhrBackend } from '@angular/common/http';

import * as Settings from '../config';

export class Model{
    protected _http: HttpClient;
    public _model: string;

    constructor(){
        this._http =  new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    }

    request(type, url, data?){
        if(type == 'get'){
            return this._http.get(url, data)
        }else{
            return this._http.post(url, data)
        }
    }

    setValue(data){
        for(let key of Object.keys(data)){
            if(this[key] !== undefined){
                this[key] = data[key];
            }
        }
    }

    get(params?, successHandler?, errorHandler?){
        var query = "";
        if(params){
            query = '?'
            for (var key in params) {
                if (query != "") {
                    query += "&";
                }
                query += key + "=" + encodeURIComponent(params[key]);
            }
        }
        this.request('get', Settings.config.api[this._model].get + query).subscribe(
            data => (successHandler) ? successHandler(data) : '',
            error => (errorHandler) ? errorHandler(error) : ''
        )
    }

    all(params?, successHandler?, errorHandler?){
        var query = "";
        if(params){
            query = '?'
            for (var key in params) {
                if (query != "") {
                    query += "&";
                }
                query += key + "=" + encodeURIComponent(params[key]);
            }
        }
        this.request('get', Settings.config.api[this._model].all + query).subscribe(
            data => (successHandler) ? successHandler(data) : '',
            error => (errorHandler) ? errorHandler(error) : ''
        )
    }


    create(successHandler?, errorHandler?){
        this.request('post', Settings.config.api[this._model].create).subscribe(
            data => (successHandler) ? successHandler(data) : '',
            error => (errorHandler) ? errorHandler(error) : ''
        )
    }

    save(successHandler?, errorHandler?){
        this.request('post', Settings.config.api[this._model].save).subscribe(
            data => (successHandler) ? successHandler(data) : '',
            error => (errorHandler) ? errorHandler(error) : ''
        )
    }
}