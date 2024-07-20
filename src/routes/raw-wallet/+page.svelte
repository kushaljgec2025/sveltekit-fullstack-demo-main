<script lang="ts">
    import { PrivateKey } from '@bsv/sdk';
    let WIF: string;
    let address: string;

    function createKeys() {
        const privKey = PrivateKey.fromRandom();
        WIF = privKey.toWif();
        console.log("private key WIF format: ", WIF);

        address = privKey.toAddress();
        console.log("Your bitcoin address: ", address);
    }
</script>

<section class="flex flex-col items-center justify-center space-y-5 mt-10 p-6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg text-white w-3/4 md:w-1/2 mx-auto">
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" on:click={createKeys}>
        Generate New Wallet Keys
    </button>
    <div class="flex flex-col items-center justify-center bg-white/30 p-4 text-center rounded-lg shadow-xl dark:bg-white/10 ring-1 ring-gray-900/5 backdrop-blur-lg w-full">
        <p class="mb-2">Private Key WIF format is <strong class="text-yellow-300">{WIF}</strong></p>
        <p>Your Bitcoin Address is <strong class="text-yellow-300">{address}</strong></p>
    </div>
</section>
