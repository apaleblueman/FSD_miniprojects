import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    username: "alex_jordan",
    profilePic: "https://i.pravatar.cc/150?u=alex",
    description: "Full-stack developer with a passion for clean code and mountain biking."
  },
  {
    username: "sara_designs",
    profilePic: "https://i.pravatar.cc/150?u=sara",
    description: "Digital artist specializing in minimalist vector illustrations and brand identity."
  },
  {
    username: "tech_nomad",
    profilePic: "https://i.pravatar.cc/150?u=nomad",
    description: "Exploring the intersection of remote work, AI, and global travel."
  },
  {
    username: "luna_blue",
    profilePic: "https://i.pravatar.cc/150?u=luna",
    description: "Astrophotography enthusiast spending nights under the stars."
  },
  {
    username: "marcus_fit",
    profilePic: "https://i.pravatar.cc/150?u=marcus",
    description: "Personal trainer and nutritionist helping people reach their peak potential."
  },
  {
    username: "chef_elena",
    profilePic: "https://i.pravatar.cc/150?u=elena",
    description: "Pastry chef sharing modern twists on classic Mediterranean desserts."
  },
  {
    username: "ryan_codes",
    profilePic: "https://i.pravatar.cc/150?u=ryan",
    description: "Coffee-fueled engineer building open-source tools for the developer community."
  },
  {
    username: "maya_travels",
    profilePic: "https://i.pravatar.cc/150?u=maya",
    description: "Documenting hidden gems and street food across Southeast Asia."
  }
];

  return (
    <div className='container'>
      {users.map(function(e){
        return <Card name={e.username} image={e.profilePic} description={e.description}/>
      })}
      
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
    </div>
  )
}

export default App
