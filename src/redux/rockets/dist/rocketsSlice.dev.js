"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cancelReservation = exports.reserveRocket = exports.fetchRockets = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  rockets: [],
  loading: true,
  error: null
};
var fetchRockets = (0, _toolkit.createAsyncThunk)('get/rockets', function _callee() {
  var rockets, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.spacexdata.com/v3/rockets'));

        case 2:
          rockets = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(rockets.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchRockets = fetchRockets;
var rocketsSlice = (0, _toolkit.createSlice)({
  name: 'Rockets',
  initialState: initialState,
  reducers: {
    reserveRocket: function reserveRocket(state, action) {
      var id = action.payload;
      var newState = state.rockets.map(function (rocket) {
        if (rocket.id !== id) return rocket;
        return _objectSpread({}, rocket, {
          reserved: true
        });
      });
      state.rockets = newState;
    },
    cancelReservation: function cancelReservation(state, action) {
      var id = action.payload;
      var newState = state.rockets.map(function (rocket) {
        if (rocket.id !== id) return rocket;
        return _objectSpread({}, rocket, {
          reserved: false
        });
      });
      state.rockets = newState;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchRockets.pending, function (state) {
      state.loading = true;
    }).addCase(fetchRockets.fulfilled, function (state, action) {
      state.loading = false;
      state.rockets = action.payload;
      state.error = null;
    }).addCase(fetchRockets.rejected, function (state, action) {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});
var _rocketsSlice$actions = rocketsSlice.actions,
    reserveRocket = _rocketsSlice$actions.reserveRocket,
    cancelReservation = _rocketsSlice$actions.cancelReservation;
exports.cancelReservation = cancelReservation;
exports.reserveRocket = reserveRocket;
var _default = rocketsSlice.reducer; // Newline

exports["default"] = _default;