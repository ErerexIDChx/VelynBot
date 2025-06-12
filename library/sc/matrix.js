const matrix = () => {
  const chars = "01325";
  const columns = process.stdout.columns || 80;
  const drops = Array(columns).fill(1);

  const colorGreen = (text) => `\x1b[32m${text}\x1b[0m`;
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const draw = () => {
    let output = '';
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      output += Math.random() > 0.975 ? colorGreen(char) : ' ';
    }
    console.log(output);
  };

  return new Promise(resolve => {
    const interval = setInterval(draw, 50);
    setTimeout(() => {
      clearInterval(interval);
      console.clear();

      console.log('\x1b[36m');
      console.log('Velyn Alexandria');
      console.log('                        Credits By Velyn');
      console.log('\x1b[0m');

      console.log('\n\x1b[36m[ NeoShiroko Labs ]\x1b[0m Bot Starting...\n');
      resolve(); // Resolve promise setelah animasi selesai
    }, 3000); // Efek jalan selama 3 detik
  });
};
module.exports = matrix;