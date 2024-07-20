<script lang="ts">
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="flex flex-col md:flex-row justify-center mt-3 space-y-10 md:space-y-0 md:space-x-14">
    <div class="w-full md:w-2/5 max-w-lg p-6 rounded-lg shadow-xl bg-gradient-to-r from-green-400 to-blue-500 ring-1 ring-gray-900/5 backdrop-blur-lg text-white">
        <h2 class="text-center text-2xl font-bold mb-4">LOGIN</h2>
        <form method="POST" action="?/login">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="email"
                    >
                    Email
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="password"
                    >
                    Password
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3">
                    <button
                        type="submit"
                        class="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 rounded"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
        {#if form?.success}
            <p class="pt-2 text-center text-green-100">Login Successful. Your balance is {form?.balance}</p>
        {/if}
    </div>

    <div class="w-full md:w-2/5 max-w-lg p-6 rounded-lg shadow-xl bg-gradient-to-r from-purple-400 to-pink-500 ring-1 ring-gray-900/5 backdrop-blur-lg text-white">
        <h2 class="text-center text-2xl font-bold mb-4">PAYMENT</h2>
        <form method="POST" action="?/pay">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="email"
                    >
                    Email
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="password"
                    >
                    Password
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="paymail"
                    >
                    Paymail
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="paymail"
                    type="text"
                    placeholder="Enter paymail"
                    name="paymail"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3 mb-6">
                    <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for="amount"
                    >
                    Amount
                    </label>
                    <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    name="amount"
                    />
                </div>
                <div class="w-3/4 mx-auto px-3">
                    <button
                        type="submit"
                        class="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 rounded"
                    >
                        Pay
                    </button>
                </div>
            </div>
        </form>
        {#if form?.success}
            <p class="text-center text-green-100">Payment Successful. Here is your <a href="{form?.payment}" class="text-blue-200 underline" target="_blank">Transaction</a>!</p>
        {/if}
    </div>
</div>
