import React from 'react';
import './CategorySearch.css';

const CategorySearch = () =>{
    return(
        <div id="category_seach_feature"> 
          <div className="container-fluid">
              <p id='descr'>  :מצא את העסק שאתה מחפש באמצעות סימון הקטגוריות המועדפות עליך  </p>
            <nav aria-label = 'Search Category'>
              <ul className = "pagination">
                <li className="page-item"><a id="cat" className="page-link" href="#" >חברה ופנאי</a></li>
                <li className="page-item"><a id="cat" className="page-link" href="#">צרכים יומיומיים</a></li>
                <li className="page-item"><a id="cat" className="page-link" href="#">סיוע משפטי</a></li>
                <li className="page-item"><a id="cat" className="page-link" href="#"> בריאות </a></li>
                <li className="page-item"><a id="cat" className="page-link" href="#">תעסוקה</a></li>
              </ul>
            </nav>
          </div>
          <button id="category_search_button" class="btn btn-primary">חיפוש לפי קטגוריה</button>
        </div>   
    )
}

export default CategorySearch;