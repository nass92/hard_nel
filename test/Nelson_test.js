/* eslint-disable quotes */
/* eslint-disable no-undef */
const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('NelsonTest', function () {
  let deployer, Nm, nm;

  beforeEach(async function () {
    [, deployer] = await ethers.getSigners();
    Nm = await ethers.getContractFactory('NMToken');
    nm = await Nm.connect(deployer).deploy();
    await nm.deployed();
  });

  describe('contructor', async () => {
    it('Should have created a NFT contract of name "NelsonMakamo", and Symbol "NM"', async function () {
      expect(await nm.name()).to.equal('NelsonMakamo');
      expect(await nm.symbol()).to.equal('NM');
    });
  });
  describe('certify', async () => {
    beforeEach(async function () {
    });

    it('Should increase the balance of the author', async function () {
<<<<<<< HEAD
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
      expect(await nm.balanceOf(deployer.address)).to.equal(1);
    });
    it('Should have the right owner', async function () {
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
=======
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
      expect(await nm.balanceOf(deployer.address)).to.equal(1);
    });
    it('Should have the right owner', async function () {
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
      expect(await nm.ownerOf(0)).to.equal(deployer.address);
    });

    it('should have the right URI', async function () {
<<<<<<< HEAD
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
=======
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
      expect(await nm.tokenURI(0)).to.equal('ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N');
    });
  });

  describe('checkin', async () => {
    beforeEach(async function () {
<<<<<<< HEAD
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
=======
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
    });
    it('Should find the right NFT with his ID', async function () {
      const nft = await nm.connect(deployer).getNMById(0);
      expect('ewe').to.equal(nft.title);
    });
    it('Should find the right ID with the hash of the content NFT', async function () {
<<<<<<< HEAD
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
      
      expect(await nm.connect(deployer).getNMByURI('ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N')).to.equal(0);
=======
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
      expect(await nm.connect(deployer)
        .getNMByTitle('ewe'))
        .to.equal(0);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
    });
  });
  describe('getNMById', async () => {
    beforeEach(async function () {
<<<<<<< HEAD
      await nm.connect(deployer).certify(
        'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
      await nm.listNFT(0, 100)
=======
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
    });
    it('Should return the price of the nft', async function() {
      const nft = await nm.connect(deployer).getPrice(0);
      expect(nft).to.equal(100)
    }) 
    it('Should return the NFT assossiated with the id', async function () {
      const nft = await nm.connect(deployer).getNMById(0);
<<<<<<< HEAD
      expect(nft.title).to.equal('ewe');
      expect(nft.author).to.equal('rara');
      expect(nft.uri).to.equal('ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N');
      expect(nft.description).to.equal('description');
      expect(nft.forSell).to.equal(true);
=======
      expect(20).to.equal(nft.royalties);
      expect(nft.title).to.equal('ewe');
      expect(nft.author).to.equal('rara');
      expect(nft.forSell).to.equal(false);
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
    });
  });
});

describe('MarketTest', function () {
  let MarketPlace, mp, deployer, NEW_NFT_OWNER, Nm, nm;

  beforeEach(async () => {
    [, deployer, NEW_NFT_OWNER] = await ethers.getSigners();
    Nm = await ethers.getContractFactory('NMToken');
    nm = await Nm.connect(deployer).deploy();
    await nm.deployed();
    [, deployer, NEW_NFT_OWNER] = await ethers.getSigners();
    MarketPlace = await ethers.getContractFactory('MarketPlace');
    mp = await MarketPlace.connect(deployer).deploy(nm.address);
    await mp.deployed();
<<<<<<< HEAD
    
    
    await nm.connect(deployer).certify(
      'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
    await nm.connect(deployer).certify(
          'ewe', 'rara', 'description', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', true);
    await nm.connect(deployer).listNFT(0, 100)
    
=======
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
  });

  describe('buyNft', () => {
    beforeEach(async () => {
      await nm.connect(deployer).certify(20,
        'ewe', 'rara', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N', false);
      await nm.connect(deployer).certify(20,
        'ewelarziz', 'manu', 'artist', 'ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS4B', false);
      await nm.connect(deployer).listNFT(0, ethers.utils.parseEther('550'));
      await nm.connect(deployer).approve(mp.address, 0);
    });
    it('should not allow sale if price is not met', async () => {
      try {
        await mp.connect(NEW_NFT_OWNER).buyNFT(0, {
          value: ethers.utils.parseEther('550'),
        });
        expect(false);
      } catch (error) {
        expect(error);
        console.log(error);
      }
    });
<<<<<<< HEAD
    it('buy nft', async () =>{
        await mp.connect(artiste).buyNFT(0);
      expect(await nm.balanceOf(artiste.address)).to.equal(1);
    })
    
    it('should mark item as sold', async () => {
      await nm.listNFT(0, 100)
      const nftSale = await nm.isForSell(0);
      expect(nftSale).to.equal(true);
    });    
=======
    it('buy nft', async () => {
      await mp.connect(NEW_NFT_OWNER).buyNFT(0, {
        value: ethers.utils.parseEther('550'),
      });
      expect(await nm.balanceOf(NEW_NFT_OWNER)).to.equal(1);
    });
    it('should mark item as selling', async () => {
      const nftSale = await nm.isForSell(0);
      expect(nftSale).to.equal(true);
    });
    it('should retunr the price by the id', async () => {
      const nftPrice = await nm.getPrice(0);
      expect(nftPrice).to.equal(ethers.utils.parseEther('550'));
    });
>>>>>>> 7947c83e2af2560c786b28170577698e9ed38b43
  });
});
