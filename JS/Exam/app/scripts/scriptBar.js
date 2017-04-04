window.onload = function() {
   // function searching(query) {
   //    $.ajax({
   //       url:`https://pixabay.com/api/?key=4845683-933d895de826e8c128c7c84b3&q=${query}&callback=?`,
   //       method: 'POST',
   //       dataType: 'jsonp',
   //       success: function (data) {
   //          if ( $('.results').children().length > 0) {
   //             $('.results').children().remove();
   //          }
   //
   //          for (let i = 0; i < data.hits.length; i++) {
   //             $('.results').append(`<img src="${data.hits[i].webformatURL}">`);
   //          }
   //       }
   //    });
   // }
   /*
   componentWillMount() - вызывается перед первым рендером компонента
   componentDidMount() - вызывается после первого рендера компонента
   componentWillUpdate(nextProps, nextState) - (новые параменты, новое состояние)
   вызывается перед обновлением(методом render()) компонента
   componentDidUpdate(prevProps, prevState) - (старые параменты, старые состояние)
   вызывается после обновления(метода render()) компонента
   componentWillUnmount() - вызывается прямо перед удалением компонента (используют для удаления
   ссылок, очистки интервалов)
   */


   // let Image = React.createClass({
   //    render: function() {
   //       let imageHref = this.props.img;
   //
   //       return (
   //          <div className="grid__item">
   //             <img src=`${imageHref}` />
   //          </div>
   //       );
   //    }
   // });

   let Grid = React.createClass({
      // componentDidMount: function() {
      //    let grid = this.refs.grid;
      //    let msnry = new Masonry( grid, {
      //       itemSelector: '.grid__item',
      //       columnWidth: 200,
      //       grid: 20
      //    });
      // },
      // getInitialState: function() {
         // return {
         //    displayedNames: NAMES
         // };
      // },
      // someHandler: function(e) {
         // this.setState({
         //    displayedNames: displayedNames
         // });
      // },
      render: function() {

         return (
            <section className="activity-bar">
               <p className="activity-bar__caption"> Discover holiday activity ideas </p>

               <div className="grid" ref="grid">

               </div>
            </section>
         );
      }
   });

   let Search = React.createClass({
      render: function() {
         return (
            <section className="activity-search">
               <div className="activity-search__text">
                  <p className="activity-search__caption"> Discover holiday activity ideas </p>
                  <p> Hi! What are your holiday interests? </p>
               </div>

               <form className="activity-search__form">
                  <input
                     className="activity-search__input"
                     type="text"
                     placeholder="Enter your interests"
                  />
                  <button className="activity-search__btn" type="button"> Search partners </button>
               </form>
            </section>
         );
      }
   });

   let Activity = React.createClass({
      render: function() {
         let somePar = ['123'];
         return (
            <div>
               <Grid images={somePar}/>
               <Search />
            </div>
         );
      }
   });

   ReactDOM.render(
      <Activity />,
      document.getElementById('activity')
   );

}
