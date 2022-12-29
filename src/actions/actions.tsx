export const TOGGLE_MENU = "TOGGLE_MENU";

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}
