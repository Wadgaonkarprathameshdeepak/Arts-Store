import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	const headerStyle = {
		fontFamily: "'Tangerine', serif", // Replace 'Tangerine' with the desired font
		fontSize: '55px', // Adjust the font size as needed
		marginBottom: '15px', // Add any additional styles as needed
		color: '#880fd1', //
		textShadow: '4px 4px 4px #aaa', // Text shadow for the header text
	};

  return (
    <header className="App-header">
      <h1 style={headerStyle}>AR Shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Art Gallery Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default SearchComponent;
