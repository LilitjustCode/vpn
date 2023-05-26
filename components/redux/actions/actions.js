// import axios from 'axios';

// Define action types
// import GetLocation from 'react-native-get-location';

// export const getCoordinatesForFirstLoadMap = () => {
//   try {
//     return async dispatch => {
//       await GetLocation.getCurrentPosition({
//         enableHighAccuracy: true,
//         timeout: 15000,
//       })
//         .then(location => {
//           let set_coord = [location.longitude, location.latitude];

//           dispatch({
//             type: 'GET_COORDINATES_FOR_FIRST_LOAD_MAP',
//             payload: {
//               map_coordinates: set_coord,
//               user_coordinates: set_coord,
//               first_point_coordinates: set_coord,
//               mapReady: true,
//             },
//           });
//         })
//         .catch(error => {
//           const {code, message} = error;
//           console.warn(code, message, 'useEffect ERROR');
//         });
//     };
//   } catch (error) {}
// };

// export const searchFromAddressList = address => {
//   try {
//     return async dispatch => {
//       let url = `https://photon.komoot.io/api/?lang=en&q=${address}`;

//       console.log(url, 'search ADDRESS FROM');

//       fetch(url)
//         .then(resp => {
//           return resp.json();
//         })
//         .then(resp => {
//           let response = resp.features;
//           let result_resp = [];

//           for (const responseKey in response) {
//             if (response[responseKey].properties.countrycode == 'AM') {
//               result_resp.push(response[responseKey]);
//             }
//           }

//           dispatch({
//             type: 'SEARCH_FROM_ADDRESS_LIST',
//             payload: result_resp,
//           });
//           console.log(resp, 'SEARCH_FROM_ADDRESS_LIST');
//         })
//         .catch(err => console.error(err));
//     };
//   } catch (error) {}
// };

// export const editFromInputValue = from_data => dispatch => {
//   console.log(from_data, 'EDIT_FROM_INPUT_VALUE ACTIONS');

//   dispatch({
//     type: 'EDIT_FROM_INPUT_VALUE',
//     payload: from_data,
//   });
// };

// export const setFromCoordinatesAfterClickToAddressInSearchResult =
//   coordinates => dispatch => {
//     console.log(
//       coordinates,
//       'setFromCoordinatesAfterClickToAddressInSearchResult ACTIONS',
//     );

//     dispatch({
//       type: 'SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT',
//       payload: coordinates,
//     });
//   };

// export const replaceFromAddressNameWithReserveFromAddressName =
//   () => dispatch => {
//     dispatch({
//       type: 'REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME',
//       payload: null,
//     });
//   };

// export const setFromDataCoordinate = from_data => dispatch => {
//   console.log(from_data, 'setFromDataCoordinate ACTIONS');

//   dispatch({
//     type: 'SET_FROM_COORDINATE_AND_NAME',
//     payload: from_data,
//   });
// };

// export const setFromDefined = defined => dispatch => {
//   console.log(defined, 'setFromDefined ACTIONS');

//   dispatch({
//     type: 'SET_FROM_DEFINED',
//     payload: defined,
//   });
// };

export const openMenu = () => dispatch => {
  dispatch({
    type: 'OPEN_MENU_BAR',
    payload: null,
  });
};

export const closeMenu = () => dispatch => {
  dispatch({
    type: 'CLOSE_MENU_BAR',
    payload: null,
  });
};

export const openLocation = () => dispatch => {
  dispatch({
    type: 'OPEN_LOCATION_POPUP',
    payload: null,
  });
};

export const closeLocation = () => dispatch => {
  dispatch({
    type: 'CLOSE_LOCATION_POPUP',
    payload: null,
  });
};


export const getData = (data) => dispatch => {
  dispatch({
    type: 'MAIN_PAGE_DATA',
    payload: data,
  });
};

