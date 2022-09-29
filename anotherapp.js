import * as THREE from 'three'; 
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

const textureLINK = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 
const displacementLINK = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"; 
const worldLINK = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var controls = new OrbitControls( camera, renderer.domElement );
controls.enablePan = true;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2 ,100 ,100 );

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load( textureLINK );
var displacementMap = textureLoader.load( displacementLINK );
var worldTexture = textureLoader.load( worldLINK );

var material = new THREE.MeshPhongMaterial ( 
  { color: 0xffffff ,
  map: texture ,
  displacementMap: displacementMap,
  displacementScale: 0.08,
  bumpMap: displacementMap,
  bumpScale: 0.07,
   reflectivity:0, 
   shininess :0
  } 

);

var lyna = new THREE.Mesh( geometry, material );


const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set( 5, 3, 5 );
scene.add(light);


const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.5 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 0, 0 );
scene.add( hemiLight );


var worldGeometry = new THREE.SphereGeometry( 1000,60,60 );
var worldMaterial = new THREE.MeshBasicMaterial ( 
  { color: 0xffffff ,
  map: worldTexture ,
  side: THREE.BackSide
  } 
);
var world = new THREE.Mesh( worldGeometry, worldMaterial );
scene.add( world );

scene.add( lyna );
camera.position.z = 5;

lyna.rotation.x = 3.1415*0.02;
lyna.rotation.y = 3.1415*1.54;


function animate() {
	requestAnimationFrame( animate );
  lyna.rotation.y -= 0.001;
  lyna.rotation.x -= 0.0009;
  world.rotation.y += 0.0002
  world.rotation.x += 0.0005

	renderer.render( scene, camera );
}
animate();


function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize, false);
