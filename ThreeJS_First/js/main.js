// Learning about Three.js on Fireship.io
// This is the first basic project to help me understand this better.
// Had to deal with a lot of problems, importing three.js from within main.js won't work.
// However without importing, Intellicode won't be able to give me function suggestions.

// import * as THREE from './three.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry(12, 3, 15, 500);
const material = new THREE.MeshStandardMaterial( { color: 0xff00ff} );
const torus = new THREE.Mesh( geometry, material );
scene.add(torus);

const pointLight = new THREE.PointLight(0xff0000);
pointLight.position.set(15,5,5)

const ambientLight = new THREE.AmbientLight(0x1000ee)

scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

camera.position.z = 30;

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.001;
    torus.rotation.z += 0.005;
	renderer.render( scene, camera );
}
animate();