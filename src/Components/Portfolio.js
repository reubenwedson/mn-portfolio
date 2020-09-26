import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var hostedAndEditedByMe = this.props.data.hostedAndEditedByMe.map(function(hostedAndEditedByMe){
        var projectImage = 'images/portfolio/'+hostedAndEditedByMe.image;
        return <div key={hostedAndEditedByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={hostedAndEditedByMe.url} title={hostedAndEditedByMe.title}>
               <img alt={hostedAndEditedByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{hostedAndEditedByMe.title}</h5>
                     <p>{hostedAndEditedByMe.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var shotAndEditedByMe = this.props.data.shotAndEditedByMe.map(function(shotAndEditedByMe){
        var projectImage = 'images/portfolio/'+shotAndEditedByMe.image;
        return <div key={shotAndEditedByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={shotAndEditedByMe.url} title={shotAndEditedByMe.title}>
               <img alt={shotAndEditedByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{shotAndEditedByMe.title}</h5>
                     <p>{shotAndEditedByMe.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Hosted and edited by me.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {hostedAndEditedByMe}
            </div>
          </div>
      </div>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Shot and edited by me.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {shotAndEditedByMe}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
