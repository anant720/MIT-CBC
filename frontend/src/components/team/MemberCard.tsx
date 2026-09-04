import Link from "next/link";

export default function MemberCard({ member, onClick }: { member: any; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="group border border-cbc-grey/20 p-6 hover:border-cbc-blue transition-colors cursor-pointer">
      {/* Photo placeholder or real photo */}
      <div className="w-full aspect-square bg-cbc-grey/10 mb-4 overflow-hidden flex items-center justify-center border border-cbc-grey/10">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-anton text-5xl text-cbc-grey/30 uppercase">{member.name.charAt(0)}</span>
        )}
      </div>
      <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-1">{member.role}</div>
      <h3 className="font-anton text-2xl text-cbc-offwhite uppercase mb-1 group-hover:glitch-text" data-text={member.name}>{member.name}</h3>
      <p className="text-cbc-grey font-mono text-xs mb-1">{member.batch}</p>
      {member.isAlumni && member.graduationYear && (
        <p className="text-cbc-grey/60 font-mono text-xs mb-3">Class of {member.graduationYear}</p>
      )}
      {member.bio && <p className="text-cbc-grey font-mono text-xs leading-relaxed mb-4 line-clamp-3">{member.bio}</p>}
      <div className="flex gap-4 mt-2">
        {member.github   && <a href={member.github}   target="_blank" rel="noopener noreferrer" className="text-cbc-grey hover:text-cbc-blue font-mono text-xs tracking-widest transition-colors">GH</a>}
        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cbc-grey hover:text-cbc-blue font-mono text-xs tracking-widest transition-colors">IN</a>}
        {member.email    && <a href={`mailto:${member.email}`} className="text-cbc-grey hover:text-cbc-blue font-mono text-xs tracking-widest transition-colors">MAIL</a>}
      </div>
    </div>
  );
}
