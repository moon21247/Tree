import {Node} from "./node.js";
import {Collision} from "../collision.js";
import {Vector3} from "../../math/vector3.js";

export class Network {
    #collision = new Collision();
    #random;
    #parameters;

    /**
     * Construct a tree network
     * @param {Random} random The randomizer
     * @param {Parameters} parameters The parameters
     */
    constructor(random, parameters) {
        this.#random = random;
        this.#parameters = parameters;

        this.grow(new Vector3());
    }

    /**
     * Grow a network
     * @param {Vector3} start The network origin
     */
    grow(start) {
        if (this.#collision.fits(start, this.#parameters.radiusInitial)) {
            const root = new Node(start, this.#parameters.radiusInitial);

            root.grow(this.#parameters, this.#collision, this.#random);

            // TODO: Model root
        }
    }
}