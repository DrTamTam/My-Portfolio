function Projects() {

    return (
      <div className='projects' id='for-projects'>
        <h2>Projects</h2>
        <p>Please click the links below to view my projects</p>

        <div class="first-project">
                <h3>
                    Crowdfunding Campaign
                </h3>
                <p>  
                  A smart contract that allows the owner of the crowdfunding campaign source for funds from users. The campaign has a start date and an end date and it enables the users pledge a certain amount of token which will be claimed by the owner when the goal is reached. 
                </p> 
                <div class="buttons">
                    <button> <a href="https://github.com/DrTamTam/Crowdfunding-Campaign-Project.git">View Project</a> </button>
                </div>
        </div>
        <div class="first-project">
                <h3>
                    ERC-20 Token 
                </h3>
                <p>  
                  Created an ERC-20 token called tech4dev and deployed it on Ethereum, Binance and Polygon testnets.
                </p> 
                <div class="buttons">
                    <button> <a href="https://github.com/DrTamTam/ERC20-project.git">View Project</a> </button>
                </div>
        </div>
        <div class="first-project">
                <h3>
                    Ethereum Wallet 
                </h3>
                <p>  
                  An Ethereum wallet which allows users to credit it with Ether, get the balance, and withdraw funds.
                </p> 
                <div class="buttons">
                    <button> <a href="https://github.com/DrTamTam/Ethereum-Wallet.git">View Project</a> </button>
                </div>
        </div>
        <div class="first-project">
                <h3>
                    Piggybank
                </h3>
                <p>  
                A smart contract that functions like the traditional piggybank. Allows users deposit any amount of token. Once users withdraw the token, the smart contract self destructs.
                </p> 
                <div class="buttons">
                    <button> <a href="https://github.com/DrTamTam/Piggybank.git">View project</a> </button>
                </div>
        </div>
      </div>
    )
  }
  
  export default Projects
  