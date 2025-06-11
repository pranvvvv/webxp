
import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: 'Pranav',
      role: 'Founder & Lead Designer',
      image: 'https://source.unsplash.com/photo-1568602471122-7832951cc4c5',
      bio: 'With over 2 years of experience in web design and development, Pranav leads our creative direction and ensures all projects meet our high standards.',
    },
    {
      name: 'Anita Sharma',
      role: 'Senior Developer',
      image: 'https://source.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Anita transforms designs into functional, high-performance websites with a focus on clean code and exceptional user experience.',
    },
    {
      name: 'Rahul Patel',
      role: 'UI/UX Designer',
      image: 'https://source.unsplash.com/photo-1557862921-37829c790f19',
      bio: 'Rahul creates intuitive user interfaces and experiences that delight customers while achieving business objectives.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The talented professionals behind WebXp's success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
