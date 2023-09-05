import "./BlocksSectionPhone.css";
import "./BlocksSectionDesctop.css"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__section">
        <YMaps>
            <Map className = "blocks__section_map" defaultState={{center: [54.934690, 82.924673],
                  zoom: 16, 
                  controls: ["zoomControl", "fullscreenControl"],}}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}>
              <Placemark defaultGeometry={[54.934690, 82.924673]} />
            </Map>
        </YMaps>;
      </div>
    </div>
  );
};

export default BlocksSection;