import PropTypes from 'prop-types';

const SectionHeader = ({
  title, subtitle, titleSize = "text-3xl md:text-4xl lg:text-5xl", subtitleSize = "text-md", className = "",
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`${titleSize} font-bold text-foreground mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleSize} text-muted-foreground max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string,
  className: PropTypes.string
};

export default SectionHeader;