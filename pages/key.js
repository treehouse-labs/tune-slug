const Page = ({}) => {
    return(
        <div>
           {process.env.CLIENT_ID}
           {process.env.REDIRECT}
           {process.env.ENDPOINT}
           {process.env.MY_VAR}
        </div>
    )
}

export default Page;