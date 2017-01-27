import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

    public apiUrl = "http://cwdgarys2/coreworxwebapi/pic/v2";

    public consumerKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb3Jld29yeCBJbmMuIiwiYXVkIjoiaHR0cDovL3d3dy5jb3Jld29yeC5jb20iLCJuYmYiOjE0NzI0OTQ0OTEsImV4cCI6NDEwMjM3NjQwMCwidW5pcXVlX25hbWUiOiJ0ZXN0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IntcIk5hbWVcIjpcInRlc3RcIixcIkV4cGlyZXNcIjpcIjEyLzMxLzIwOTkgMTI6MDA6MDAgQU1cIixcIlByb2plY3RzXCI6XCIqXCIsXCJQcm9qZWN0TGlzdFwiOltcIipcIl0sXCJBbGxvd0FsbFByb2plY3RzXCI6dHJ1ZSxcIklwQWRkcmVzc2VzXCI6XCIqXCIsXCJJcEFkZHJlc3NMaXN0XCI6W1wiKlwiXSxcIkFsbG93QWxsSXBBZGRyZXNzZXNcIjp0cnVlfSJ9.5BRFhunmdEVw1C8bRkNMUxp38-mJzLu9tDnrskJv4ro";

    // GS: I know this doesn't really fit here but I've put it here for convenience.
    public token: string;

    constructor() { }

    // TODO: Refactor into base class or http helper
    // Helper Methods
    public url(path: string): string {
        return `${this.apiUrl}/${path}`;
    }

    public get headers(): Headers {
        let headers: Headers = new Headers();
        headers.append('authorization', `Token ${this.token}`);
        headers.append('Accept', 'application/json');
        return headers;
    }

}