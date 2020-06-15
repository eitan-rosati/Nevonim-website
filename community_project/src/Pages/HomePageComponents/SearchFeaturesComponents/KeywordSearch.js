import React, {Component} from 'react';
import style from './KeywordSearch.css'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";    

const KeywordSearch=()=>{
    return(
       <div id='KeywordSearchFeature'>
            <div id="description_keyword_search">הקלד/י כאן איזה שירות את/ה מחפש/ת</div>
            <MDBCol md="12">
                <MDBFormInline id="openSearch" className="md-form mr-auto mb-4">
                    <MDBBtn href="/Pages/SearchResultPage" id="send_keyword_search"gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                    שלח 
                    </MDBBtn>
                    <input id="keyword_input"className="form-control mr-sm-2" type="text" placeholder=" ”נסה לחפש ”ליווי יומיומי” או ”תיעוד סיפור חיים" aria-label="Search" />
                </MDBFormInline>
            </MDBCol>
       </div>
    )
}
export default KeywordSearch;