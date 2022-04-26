/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: { lat: 12.913102761931135, lng: 77.64470686078408 },
    }
  );

  const outerCoords = [
    {lat:  12.938139814015253 , lng:  77.61005239244767 },
    {lat:  12.940292375444729 , lng:  77.61270276405597 },
    {lat:  12.943650334170208 , lng:  77.61058246676933 },
    {lat:  12.9420144112098 , lng:  77.61570651854535 },
    {lat:  12.943822535962617 , lng:  77.61579486426564 },
    {lat:  12.946405548573882 , lng:  77.61623659286701 },
    {lat:  12.945802848025417 , lng:  77.61818019871309 },
    {lat:  12.950107819966513 , lng:  77.62056553316056 },
    {lat:  12.941756106603219 , lng:  77.6274564993421 },
    {lat:  12.940034069054247 , lng:  77.62542454777574 },
    {lat:  12.937278784241311 , lng:  77.62674973357989 },
    {lat:  12.93736488735246 , lng:  77.62692642502044 },
    {lat:  12.938182865425922 , lng:  77.62846645239128 },
    {lat:  12.938613379123883 , lng:  77.63261870124427 },
    {lat:  12.928668323050895 , lng:  77.64432450918086 },
    {lat:  12.929959911171181 , lng:  77.65395419269097 },
    {lat:  12.924190765824275 , lng:  77.65267317974697 },
    {lat:  12.923329687920333 , lng:  77.6412324089712 },
    {lat:  12.925224055389137 , lng:  77.63681512295739 },
    {lat:  12.921090871473721 , lng:  77.62025030040559 },
    {lat:  12.93822829718131 , lng:  77.61018836475033 },
  ];

  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);

  map.data.add({
    geometry: new google.maps.Data.Polygon([
      outerCoords,
    ]),
  });


  // const hsr_voosh_kitchen = { lat: 12.917387420097, lng: 77.651464037948 };

  // new google.maps.Marker({
  //   position: hsr_voosh_kitchen,
  //   map,
  //   title: "Voosh HSR Kitchen",
  // });
}
export { initMap };
