import "./styles.css";
import { useState } from "react";

const musicObject = {
  folkAcoustic: {
    label: "Folk & Acoustic",
    data: [
      {
        name: "Kesariya Balam - Mame Khan",
        rating: "4.7/5"
      },
      {
        name: "Sajaniya - Mame Khan",
        rating: "4.4/5"
      },
      {
        name: "Chhaap Tilak - Abeda Parveen",
        rating: "4.6/5"
      }
    ]
  },
  indie: {
    label: "Indie",
    data: [
      {
        name: "Mishri - Anuv Jain",
        rating: "4.6/5"
      },
      {
        name: "Dil Mere - Local Train",
        rating: "4.7/5"
      },
      {
        name: "Kadam - Prateek Kuhad",
        rating: "4.5/5"
      }
    ]
  },
  hipHop: {
    label: "Hip Hop",
    data: [
      {
        name: "Mohabbat - Kaam Bhari",
        rating: "4.9/5"
      },
      {
        name: "Punya Paap - Divine",
        rating: "4.5/5"
      },
      {
        name: "Azadi - Dub Sharma, Divine",
        rating: "4.7/5"
      }
    ]
  }
};

export default function App() {
  var [tab, setTab] = useState("folkAcoustic");

  const currentGenre = musicObject[tab];

  return (
    <div className="App">
      <main style={{ maxWidth: "600px", margin: "auto" }}>
        <h1>🎵 Songs you'll enjoy</h1>

        <p style={{ marginRight: "3rem" }}>
          Click on the genre to see my favourites
        </p>

        <div>
          {Object.keys(musicObject).map((key) => {
            const obj = musicObject[key];
            return (
              <button key={key} onClick={() => setTab(key)} className="button">
                {obj.label}
              </button>
            );
          })}
        </div>
        <hr
          style={{
            width: "75%",
            margin: "8px",
            marginLeft: "130px",
            display: "block"
          }}
        />

        <div style={{ textAlign: "left" }}>
          <ul style={{ listStyle: "none", marginLeft: "4.6rem" }}>
            {currentGenre.data.map((item, index) => {
              return (
                <li key={`list-item-${index}`} className="listStyle">
                  <div>{item.name}</div>
                  <div>{item.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
