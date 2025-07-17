from sqlalchemy import Column, String, Integer, ForeignKey, JSON, Text, Enum
from sqlalchemy.orm import relationship
from app.core.database import Base
import enum

class BusinessSize(str, enum.Enum):
    MICRO = "micro"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"

class BusinessProfile(Base):
    __tablename__ = "business_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    
    # Basic Information
    business_type = Column(String, nullable=False)  # IT, Construction, Healthcare, etc.
    description = Column(Text)
    location = Column(String, nullable=False)  # City/Region
    postcode = Column(String)
    size = Column(Enum(BusinessSize), nullable=False)
    
    # Capabilities & Certifications
    capabilities = Column(JSON)  # List of capability tags
    certifications = Column(JSON)  # List of certification objects
    
    # Sectors & Keywords
    sectors = Column(JSON)  # List of sector codes
    keywords = Column(JSON)  # List of keywords for matching
    
    # Preferences
    min_contract_value = Column(Integer, default=0)
    max_contract_value = Column(Integer)
    preferred_locations = Column(JSON)  # List of locations
    opportunity_types = Column(JSON)  # contracts, grants, frameworks, etc.
    
    # Relationships
    user = relationship("User", backref="business_profile")