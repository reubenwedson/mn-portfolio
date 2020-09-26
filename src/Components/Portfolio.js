import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var hostedAndEditedByMe = this.props.data.hostedAndEditedByMe.map(function(hostedAndEditedByMe){
        var projectImage = 'images/portfolio/'+hostedAndEditedByMe.image;
        return <div key={hostedAndEditedByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={hostedAndEditedByMe.url} title={hostedAndEditedByMe.title} target="_blank"  rel="noopener noreferrer">
               <img alt={hostedAndEditedByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{hostedAndEditedByMe.title}</h5>
                     <p>{hostedAndEditedByMe.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
      var shotAndEditedByMe = this.props.data.shotAndEditedByMe.map(function(shotAndEditedByMe){
        var projectImage = 'images/portfolio/'+shotAndEditedByMe.image;
        return <div key={shotAndEditedByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={shotAndEditedByMe.url} title={shotAndEditedByMe.title} target="_blank"  rel="noopener noreferrer">
               <img alt={shotAndEditedByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{shotAndEditedByMe.title}</h5>
                     <p>{shotAndEditedByMe.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
      var shotByMe = this.props.data.shotByMe.map(function(shotByMe){
        var projectImage = 'images/portfolio/'+shotByMe.image;
        return <div key={shotByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={shotByMe.url} title={shotByMe.title} target="_blank"  rel="noopener noreferrer">
               <img alt={shotByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{shotByMe.title}</h5>
                     <p>{shotByMe.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
        var producedByMe = this.props.data.producedByMe.map(function(producedByMe){
        var projectImage = 'images/portfolio/'+producedByMe.image;
        return <div key={producedByMe.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={producedByMe.url} title={producedByMe.title} target="_blank"  rel="noopener noreferrer">
               <img alt={producedByMe.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{producedByMe.title}</h5>
                     <p>{producedByMe.category}</p>
                  </div>
                </div>
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

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Shot by me.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {shotByMe}
            </div>
          </div>
      </div>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Produced by me.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {producedByMe}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
