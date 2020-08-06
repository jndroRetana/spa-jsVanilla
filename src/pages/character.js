import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const hash = getHash();
  const data = await getData(hash);
  const view = `
    <div class="Characters-inner">
        <articleclass="Character-card">
            <img src="${data.image}" alt="${data.name}">
            <h2>${data.name}</h2>
        </article>
        <articleclass="Character-card">
            <h3>Epsiodes: ${data.episode.length}</h3>
            <h3>Status: ${data.status}</h3>
            <h3>Species: ${data.species}</h3>
            <h3>Gender: ${data.gender}</h3>
            <h3>Origin: ${data.origin.name}</h3>
            <h3>Last Location: ${data.location.name}</h3>
        </article>
    </div>
  `;
  return view;
};

export default Character;
