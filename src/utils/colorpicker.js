import * as colors from 'material-ui/colors';

const MainColors = [
  colors.red,
  colors.pink,
  colors.purple,
  colors.deepPurple,
  colors.indigo,
  colors.blue,
  colors.lightBlue,
  colors.cyan,
  colors.teal,
  colors.green,
  colors.lightGreen,
  colors.lime,
  colors.yellow,
  colors.amber,
  colors.orange,
  colors.deepOrange,
  colors.grey,
  colors.blueGrey,
  colors.brown
];

const colorPicker = (str) => {
  try {
    const index = str.toString().split('').map(char => char.charCodeAt(0)).reduce((a, b) => a + b, 0);
    const colorIndex = index % MainColors.length;
    return MainColors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return MainColors[1][500];
  }
};

export default colorPicker;
