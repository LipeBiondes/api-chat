const generateShortName = (name) => {
  // Extrai a primeira palavra do nome
  const firstPart = name.split(" ")[0];

  // Obtém a data e tempo atuais em formato numérico (YYYYMMDDHHMMSSms)
  const dateNow = new Date();
  const formattedDate = `${dateNow.getFullYear()}${(dateNow.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${dateNow.getDate().toString().padStart(2, "0")}`;
  const formattedTime = `${dateNow.getHours().toString().padStart(2, "0")}${dateNow
    .getMinutes()
    .toString()
    .padStart(
      2,
      "0",
    )}${dateNow.getSeconds().toString().padStart(2, "0")}${dateNow
    .getMilliseconds()
    .toString()
    .padStart(3, "0")}`; // Horas, minutos, segundos e milissegundos

  // Concatena a primeira parte do nome com a data e o tempo
  const shortName = `${firstPart}-${formattedDate}${formattedTime}`;

  return shortName;
};

module.exports = generateShortName;
