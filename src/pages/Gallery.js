import React, { useState } from 'react';
import './Gallery.css';
import { FaSearch, FaHeart, FaRegHeart } from 'react-icons/fa';


import arabic1 from '../assets/arabic1.jpg';
import arabic2 from '../assets/arabic2.jpg';
import arabic3 from '../assets/arabic3.jpg';
import arabic4 from '../assets/arabic4.jpg';
import arabic5 from '../assets/arabic5.jpg';
import engagement1 from '../assets/engagement1.jpg';
import engagement2 from '../assets/engagement2.jpg';
import engagement3 from '../assets/engagement3.jpg';
import engagement4 from '../assets/engagement4.jpg';
import engagement5 from '../assets/engagement5.jpg';
import baby1 from '../assets/baby1.jpg';
import baby2 from '../assets/baby2.jpg';
import baby3 from '../assets/baby3.jpg';
import baby4 from '../assets/baby4.jpg';
import baby5 from '../assets/baby5.jpg';
import bridal1 from '../assets/bridal1.jpg';
import bridal2 from '../assets/bridal2.jpg';
import bridal3 from '../assets/bridal3.jpg';
import bridal4 from '../assets/bridal4.jpg';
import bridal5 from '../assets/bridal5.jpg';
import party1 from '../assets/party1.jpg';
import party2 from '../assets/party2.jpg';
import party3 from '../assets/party3.jpg';
import party4 from '../assets/party4.jpg';
import party5 from '../assets/party5.jpg';
import traditional1 from '../assets/traditional1.jpg';
import traditional2 from '../assets/traditional2.jpg';
import traditional3 from '../assets/traditional3.jpg';
import traditional4 from '../assets/traditional4.jpg';
import traditional5 from '../assets/traditional5.jpg';
import legs1 from '../assets/legs1.jpg';
import legs2 from '../assets/legs2.jpg';
import legs3 from '../assets/legs3.jpg';
import legs4 from '../assets/legs4.jpg';
import legs5 from '../assets/legs5.jpg';
import legs6 from '../assets/legs6.jpg';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Designs', icon: '✽' },
        { id: 'bridal', name: 'Bridal', icon: '👰' },
        { id: 'arabic', name: 'Arabic', icon: '🌙' },
        { id: 'engagement', name: 'Engagement', icon: '💍' },
        { id: 'traditional', name: 'Traditional', icon: '🪔' },
        { id: 'baby', name: 'Baby Shower', icon: '👶' },
        { id: 'party', name: 'Party', icon: '🎉' },
        { id: 'legs-design', name: 'Feet Designs', icon: '👣' },
    ];

    const galleryItems = [
        { id: 1, category: 'bridal', title: 'Bridal Mehndi Design', img: bridal1 },
        { id: 2, category: 'bridal', title: 'Full Hand Bridal Design', img: bridal2 },
        { id: 3, category: 'arabic', title: 'Arabic Floral Pattern', img: arabic1 },
        { id: 4, category: 'engagement', title: 'Engagement Mehndi', img: engagement1 },
        { id: 5, category: 'traditional', title: 'Traditional Indian Design', img: traditional1 },
        { id: 6, category: 'baby', title: 'Baby Shower Mehndi', img: baby1 },
        { id: 7, category: 'party', title: 'Festival Party Mehndi', img: party1 },
        { id: 8, category: 'arabic', title: 'Modern Arabic Design', img: arabic2 },
        { id: 9, category: 'engagement', title: 'Engagement Mehndi', img: engagement2 },
        { id: 10, category: 'traditional', title: 'Traditional Indian Design', img: traditional2 },
        { id: 11, category: 'party', title: 'Festival Party Mehndi', img: party2 },
        { id: 12, category: 'baby', title: 'Baby Shower Mehndi', img: baby2 },
        { id: 13, category: 'engagement', title: 'Engagement Mehndi', img: engagement3 },
        { id: 14, category: 'traditional', title: 'Traditional Indian Design', img: traditional3 },
        { id: 15, category: 'bridal', title: 'Full Hand Bridal Design', img: bridal3 },
        { id: 16, category: 'party', title: 'Festival Party Mehndi', img: party3 },
        { id: 17, category: 'baby', title: 'Baby Shower Mehndi', img: baby3 },
        { id: 18, category: 'traditional', title: 'Traditional Indian Design', img: traditional4 },
        { id: 19, category: 'engagement', title: 'Engagement Mehndi', img: engagement5 },
        { id: 20, category: 'arabic', title: 'Arabic Floral Pattern', img: arabic3 },
        { id: 21, category: 'baby', title: 'Baby Shower Mehndi', img: baby5 },
        { id: 22, category: 'bridal', title: 'Full Hand Bridal Design', img: bridal5 },
        { id: 23, category: 'arabic', title: 'Arabic Floral Pattern', img: arabic4 },
        { id: 24, category: 'engagement', title: 'Engagement Mehndi', img: engagement4 },
        { id: 25, category: 'baby', title: 'Baby Shower Mehndi', img: baby4 },
        { id: 26, category: 'bridal', title: 'Full Hand Bridal Design', img: bridal4 },
        { id: 27, category: 'party', title: 'Festival Party Mehndi', img: party4 },
        { id: 28, category: 'party', title: 'Festival Party Mehndi', img: party5 },
        { id: 29, category: 'traditional', title: 'Traditional Indian Design', img: traditional5 },
        { id: 30, category: 'arabic', title: 'Modern Arabic Design', img: arabic5 },
        { id: 31, category: 'legs-design', title: 'Modern Arabic Design', img: legs1 },
        { id: 32, category: 'legs-design', title: 'Modern Arabic Design', img: legs2 },
        { id: 33, category: 'legs-design', title: 'Modern Arabic Design', img: legs3 },
        { id: 34, category: 'legs-design', title: 'Modern Arabic Design', img: legs4 },
        { id: 35, category: 'legs-design', title: 'Modern Arabic Design', img: legs5 },
        { id: 36, category: 'legs-design', title: 'Modern Arabic Design', img: legs6 },

    ];

    // Filter items based on active category and search term
    let filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    if (showFavorites) {
        filteredItems = filteredItems.filter(item => favorites.includes(item.id));
    }

    if (searchTerm) {
        filteredItems = filteredItems.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const toggleFavorite = (id, e) => {
        e.stopPropagation();
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(favId => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="henna-overlay"></div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Mehndi Gallery</h2>
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">✽</div>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Explore our collection of exquisite mehndi designs that showcase our artistry and attention to detail.
                    </p>
                </div>

                <div className="gallery-controls">
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search designs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-controls">
                        <button
                            className={`favorites-btn ${showFavorites ? 'active' : ''}`}
                            onClick={() => setShowFavorites(!showFavorites)}
                        >
                            {showFavorites ? <FaHeart /> : <FaRegHeart />}
                            Favorites
                        </button>

                        <div className="category-filters">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setShowFavorites(false);
                                    }}
                                    className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                >
                                    <span className="filter-icon">{cat.icon}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                        >
                            <div className="gallery-image-container">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="gallery-image"
                                />
                                <button
                                    className="favorite-btn"
                                    onClick={(e) => toggleFavorite(item.id, e)}
                                >
                                    {favorites.includes(item.id) ?
                                        <FaHeart className="filled" /> :
                                        <FaRegHeart />
                                    }
                                </button>
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3 className="item-title">{item.title}</h3>
                                        <span className="item-category">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-results">
                        <div className="pattern"></div>
                        <h3>No designs found</h3>
                        <p>Try changing your search or filter criteria</p>
                        <button
                            className="reset-btn"
                            onClick={() => {
                                setActiveCategory('all');
                                setSearchTerm('');
                                setShowFavorites(false);
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
