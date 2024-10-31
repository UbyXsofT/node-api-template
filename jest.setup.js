// jest.setup.js
// Configura eventuali setup globali per i test
// jest.setup.js
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
