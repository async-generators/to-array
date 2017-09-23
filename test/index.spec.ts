import equal from '@async-generators/equal';
import toArray from '../src';
import { expect } from 'chai';

describe("@async-generator/to-array", () => {
  it("Should return array containing all source yielded items", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    expect(await toArray(source())).to.eql([1, 2, 3, 4]);
  });
})

describe("@async-generator/to-array", () => {
  it("Should return empty array when source yields nothing", async () => {
    let source = async function* () {
    }
    expect(await toArray(source())).to.eql([]);
  });
})