import numpy as np
import logging

logger = logging.getLogger(__name__)

# Model will be loaded lazily on first use
_vector_engine_instance = None

class VectorEngine:
    def __init__(self, model_name='all-MiniLM-L6-v2'):
        self.model = None
        self.model_name = model_name
        self._initialized = False

    def _ensure_loaded(self):
        """Lazy-load the model on first use."""
        if not self._initialized:
            try:
                logger.info(f"Loading SentenceTransformer model: {self.model_name}")
                from sentence_transformers import SentenceTransformer
                self.model = SentenceTransformer(self.model_name)
                self._initialized = True
                logger.info("SentenceTransformer model loaded successfully")
            except Exception as e:
                logger.error(f"Failed to load SentenceTransformer: {e}")
                raise

    def get_embedding(self, text: str):
        """Converts text into a 384-dimensional vector."""
        self._ensure_loaded()
        return self.model.encode(text).tolist()

    def calculate_similarity(self, vector_a, vector_b):
        """Calculates how close a dev's skill is to a problem statement."""
        return np.dot(vector_a, vector_b) / (np.linalg.norm(vector_a) * np.linalg.norm(vector_b))


def get_vector_engine():
    """Get or create the vector engine instance."""
    global _vector_engine_instance
    if _vector_engine_instance is None:
        _vector_engine_instance = VectorEngine()
    return _vector_engine_instance


vector_engine = None  # Will be initialized on first use