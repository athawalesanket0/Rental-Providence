import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AlgoliaPlaces from 'algolia-places-react';

function Home(props){

  const [citySelected, setCitySelected] = useState('');
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br />
          <br />
          <h1 className="header center orange-text">
            Find Your New Place with Room-Wala
          </h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Easy as making friends, with roomie you can look for many rooms
              available across the country.
            </h5>
          </div>
          <div className="flex items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <AlgoliaPlaces
                placeholder="Enter a City"
                options={{
                  appId: process.env.REACT_APP_APP,
                  apiKey: process.env.REACT_APP_APPK,
                  // language: "sv",
                  countries: ["in"],
                  type: 'city',
                  // Other options from https://community.algolia.com/places/documentation.html#options
                }}
                onChange={({ suggestion }) => {
                  let state = suggestion.hasOwnProperty('administrative')
                    ? suggestion.administrative
                    : suggestion.hit.administrative[0];
                  setCitySelected(`${suggestion.name}, ${state}`);
                }}
                onError={({ message }) =>
                  console.log('Sorry, error with the API! ❌')
                }
              />

              <input
                //className="mt-4 sm:mt-0 bg-themeYellow mx-1 px-3 py-1 lg:ml-6 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
                type="submit"
                value="Search"
              />
            </form>
          </div>
          <div className="row center">
             {/* <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light orange"
            >
              Get Started
            </a> 
             */}
             
            <div className="sm:py-4 lg:self-center"><img className="p-4 w-full sm:w-3/4 mx-auto lg:w-auto" src="https://blush.design/api/download?shareUri=XjBBvmxsvVzVKA2U&c=Clothing_0%7Eff4b33-0.1%7Eff8333&w=800&h=800&fm=png" alt="Rooms"/></div>
          
          </div>
          <br />
          <br />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">Room wala</i>
                </h2>
                <h5 className="center">Speeds up development</h5>

                <p className="light">
                  We did most of the heavy lifting for you to provide a default
                  stylings that incorporate our custom components. Additionally,
                  we refined animations and transitions to provide a smoother
                  experience for developers.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">Room wala</i>
                </h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that incorporates components
                  and animations that provide more feedback to users.
                  Additionally, a single underlying responsive system across all
                  platforms allow for a more unified user experience.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">contact us</i>
                </h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started. We are also
                  always open to feedback and can answer any questions a user
                  may have about Materialize.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <footer className="page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Settings</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a className="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{" "}
            <a
              className="orange-text text-lighten-3"
              href="http://materializecss.com"
            >
              Materialize
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
