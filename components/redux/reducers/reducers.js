
const initialState = {
  open_menu_bottom_sheet: false,
  close_menu_bottom_sheet: false,
  open_location_popup: false,
  allData: [],
  // movies: [],
  // favorites: [],
  // coordinates_for_first_load_map: {
  //     map_coordinates: 0,
  //     user_coordinates: 0,
  //     first_point_coordinates: 0,
  //     mapReady: false,
  // },
  // from_coordinate_and_name: {
  //     from_coordinates: null, // {'longitude' : 48183138, 'latitude':48183138}
  //     from_address_name: '',
  //     reserve_from_address_name: '',
  //     defined: true,
  //     search_from_address_list: [],
  // },
  // home_map_condition: 'SET_MY_LOCATION', // SHOW_DIRECTION_AND_TARIFS_CARS   // указываем какую карту показать на главной 1) Карту с выбором локации пользователя или карту с проложенным маршрутом и быбором тарифа
  // home_map_condition: 'SHOW_DIRECTION_AND_TARIFS_CARS', // SET_MY_LOCATION   // указываем какую карту показать на главной 1) Карту с выбором локации пользователя или карту с проложенным маршрутом и быбором тарифа
};

function justDriveReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MENU_BAR':
      return {...state, open_menu_bottom_sheet: true};
    case 'CLOSE_MENU_BAR':
      return {...state, open_menu_bottom_sheet: false};
    case 'OPEN_LOCATION_POPUP':
      return {...state, open_location_popup: true};
    case 'CLOSE_LOCATION_POPUP':
      return {...state, open_location_popup: false};
    case 'MAIN_PAGE_DATA':
      return {...state, allData: action.payload};
    default:
      return state;
  }
}

export default justDriveReducer;
