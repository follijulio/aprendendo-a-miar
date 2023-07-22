interface blocprops {
    children: React.ReactNode;
} 
const bloc: React.FC<blocprops> = ({children}) =>{
    return (
        <div className="border-4 border-sky-700 rounded-3xl h-52 w-96 transition-transform transform-gpu hover:scale-105 shadow-lg hover:shadow-sky-400 m-4">
        {children}
        </div>
    )
}
export default bloc;